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

All the methods return a `Promise`.

#### .enable()

#### .disable()

#### .toggle(force?)

##### force

Type: `boolean`

Force a specific mode, `true` for dark and `false` for light.

#### .isDark()

Returns a `Promise<boolean>` of whether you're in dark mode.

## Related

- [dark-mode-cli](https://github.com/sindresorhus/dark-mode-cli) - CLI for this module
- [alfred-dark-mode](https://github.com/sindresorhus/alfred-dark-mode) - Alfred workflow
