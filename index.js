import {runJxa} from 'run-jxa';
import {spawn} from 'child_process';

const property = 'Application(\'System Events\').appearancePreferences.darkMode';

const darkMode = {};

darkMode.enable = async () => {
	await runJxa(`${property} = true`);
};

darkMode.disable = async () => {
	await runJxa(`${property} = false`);
};

darkMode.toggle = async force => {
	if (typeof force === 'boolean') {
		// eslint-disable-next-line unicorn/prefer-ternary
		if (force) {
			await darkMode.enable();
		} else {
			await darkMode.disable();
		}

		return;
	}

	await runJxa(`${property} = !${property}()`);
};

darkMode.isEnabled = async () => runJxa(`return ${property}()`);

darkMode.watch = callback => {
	if (typeof callback !== 'function') {
		throw new TypeError('Callback must be a function');
	}

	let process;
	let previousState;

	const script = `
		ObjC.import('Cocoa');
		
		const getState = () => Application('System Events').appearancePreferences.darkMode();
		let currentState = getState();
		console.log('STATE:' + currentState);
		
		ObjC.registerSubclass({
			name: 'ThemeWatcher',
			methods: {
				'themeChanged:': {
					types: ['void', ['id']],
					implementation: function(notification) {
						const newState = getState();
						if (newState !== currentState) {
							currentState = newState;
							console.log('STATE:' + newState);
						}
					}
				}
			}
		});
		
		const handler = $.ThemeWatcher.new;
		$.NSDistributedNotificationCenter.defaultCenter.addObserverSelectorNameObject(
			handler,
			'themeChanged:',
			'AppleInterfaceThemeChangedNotification',
			$.nil
		);
		
		const runLoop = $.NSRunLoop.currentRunLoop;
		while (true) {
			runLoop.runModeBeforeDate($.NSDefaultRunLoopMode, $.NSDate.dateWithTimeIntervalSinceNow(1.0));
		}
	`;

	process = spawn('osascript', ['-l', 'JavaScript', '-e', script], {
		detached: false,
		stdio: ['ignore', 'pipe', 'pipe']
	});

	const handleOutput = data => {
		const output = data.toString().trim();
		
		for (const line of output.split('\n')) {
			if (line.startsWith('STATE:')) {
				const isDark = line.substring(6) === 'true';
				
				if (previousState !== undefined && previousState !== isDark) {
					callback(isDark);
				}
				
				previousState = isDark;
			}
		}
	};

	process.stdout.on('data', handleOutput);
	process.stderr.on('data', handleOutput);

	process.on('exit', () => {
		process = undefined;
	});

	process.on('error', () => {
		process = undefined;
	});

	return {
		stop() {
			if (process) {
				process.kill('SIGTERM');
				process = undefined;
				previousState = undefined;
			}
		}
	};
};

export default darkMode;
