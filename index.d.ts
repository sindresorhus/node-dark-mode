export type Watcher = {
	/**
	Stop watching for dark mode changes.
	*/
	stop(): void;
};

declare const darkMode: {
	/**
	Enable dark mode.

	@returns A promise that resolves when dark mode is enabled.

	@example
	```
	import darkMode from 'dark-mode';

	await darkMode.enable();
	console.log('Enabled dark mode');
	```
	*/
	enable(): Promise<void>;

	/**
	Disable dark mode.

	@returns A promise that resolves when dark mode is disabled.

	@example
	```
	import darkMode from 'dark-mode';

	await darkMode.disable();
	console.log('Disabled dark mode');
	```
	*/
	disable(): Promise<void>;

	/**
	Toggle dark mode.

	@param force - Force a specific mode. `true` for dark mode, `false` for light mode.
	@returns A promise that resolves when the toggle is complete.

	@example
	```
	import darkMode from 'dark-mode';

	await darkMode.toggle();
	console.log('Toggled between dark and light mode');

	await darkMode.toggle(true);
	console.log('Enabled dark mode');
	```
	*/
	toggle(force?: boolean): Promise<void>;

	/**
	Check if dark mode is enabled.

	@returns A promise that resolves with `true` if dark mode is enabled, `false` otherwise.

	@example
	```
	import darkMode from 'dark-mode';

	const isDarkMode = await darkMode.isEnabled();
	console.log('Dark mode is', isDarkMode ? 'enabled' : 'disabled');
	```
	*/
	isEnabled(): Promise<boolean>;

	/**
	Watch for dark mode changes.

	@param callback - Function to call when dark mode changes. Receives a boolean indicating if dark mode is enabled.
	@returns A watcher object with a `stop` method to stop watching.

	@example
	```
	import darkMode from 'dark-mode';

	const watcher = darkMode.watch(isDark => {
		console.log('Dark mode is now:', isDark ? 'enabled' : 'disabled');
	});

	// Later, stop watching
	watcher.stop();
	```
	*/
	watch(callback: (isDarkMode: boolean) => void): Watcher;
};

export default darkMode;
