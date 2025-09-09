# node-dark-mode

> Control the macOS dark mode

*Requires macOS 10.10 or later.*

<img src="screenshot.gif" width="509">

## Install

```sh
npm install dark-mode
```

## Usage

```js
import darkMode from 'dark-mode';

await darkMode.enable();
console.log('Enabled dark mode');

await darkMode.toggle();
console.log('Toggled between dark and light mode');
```

## API

### darkMode

All the methods return a `Promise`, except for `.watch()`.

#### .enable()

#### .disable()

#### .toggle(force?)

##### force

Type: `boolean`

Force a specific mode. `true` for dark and `false` for light.

#### .isEnabled()

Returns a `Promise<boolean>` of whether you're in dark mode.

#### .watch(callback)

Watch for dark mode changes.

##### callback

Type: `(isDarkMode: boolean) => void`

Function to call when dark mode changes.

Returns a watcher object with a `stop` method.

```js
import darkMode from 'dark-mode';

const watcher = darkMode.watch(isDark => {
	console.log('Dark mode is now:', isDark ? 'enabled' : 'disabled');
});

// Later, stop watching
watcher.stop();
```

## Related

- [dark-mode-cli](https://github.com/sindresorhus/dark-mode-cli) - CLI for this module
- [alfred-dark-mode](https://github.com/sindresorhus/alfred-dark-mode) - Alfred workflow
