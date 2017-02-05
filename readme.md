# node-dark-mode

> Control the macOS dark mode

*Requires macOS 10.10 or later.*

<img src="https://github.com/sindresorhus/dark-mode/raw/master/screenshot.gif" width="509">


## Install

```
$ npm install --save dark-mode
```


## Usage

```js
const darkMode = require('dark-mode');

darkMode.enable().then(() => {
	console.log('Enabled dark mode');
});

darkMode.toggle().then(() => {
	console.log('Toggled between dark and light mode');
});
```


## API

### darkMode

All the methods return a `Promise`.

#### .enable()

#### .disable()

#### .toggle([force])

##### force

Type: `boolean`

Force a specific mode, `true` for dark and `false` for light.

#### .isDark()

Returns a `Promise<boolean>` of whether you're in dark mode.


## Related

- [dark-mode-cli](https://github.com/sindresorhus/dark-mode-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
