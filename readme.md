# node-dark-mode

> Toggle the OS X [Dark Mode](http://www.macworld.co.uk/how-to/mac-software/turn-on-yosemites-dark-mode-on-mac-3534690/) using the [dark-mode](https://github.com/sindresorhus/dark-mode) binary

Requires OS X 10.10 or later.

**Ensure `System Preferences` → `General` → `Use dark menu bar and Dock` is unchecked.**

![](https://github.com/sindresorhus/dark-mode/raw/master/screenshot.gif)


## Install

```
$ npm install --save dark-mode
```


## Usage

```js
const darkMode = require('dark-mode');

darkMode.toggle(err => {
	console.log('toggled between dark and light mode');
});

darkMode.toggle(true, err => {
	console.log('forced dark mode');
});
```


## API

### darkMode.toggle(force, callback)

#### force

Type: `boolean`  
Default: `null`

Force a specific mode, `true` for dark and `false` for light.

#### callback(error)

### darkMode.isDark(callback)

#### callback(error, isDark)

##### isDark

Type: `boolean`  

Whether the current mode is dark.


## CLI

```
$ npm install --global dark-mode
```

```sh
# toggle between dark and light mode
dark-mode

# force a specific mode
dark-mode --mode Dark
dark-mode --mode Light

# get the current mode
dark-mode --mode
> Light
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
