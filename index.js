import {runJxa} from 'run-jxa';

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

export default darkMode;
