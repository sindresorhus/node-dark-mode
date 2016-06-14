# node-dark-mode

> Toggle the macOS [Dark Mode](http://www.macworld.co.uk/how-to/mac-software/turn-on-yosemites-dark-mode-on-mac-3534690/) using the [dark-mode](https://github.com/sindresorhus/dark-mode) binary

Requires macOS 10.10 or later.

**Ensure `System Preferences` → `General` → `Use dark menu bar and Dock` is unchecked.**

![](https://github.com/sindresorhus/dark-mode/raw/master/screenshot.gif)


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


## API

```
$ npm install --save dark-mode
```

```js
const darkMode = require('dark-mode');

darkMode.toggle().then(() => {
	console.log('toggled between dark and light mode');
});

darkMode.toggle(true).then(() => {
	console.log('forced dark mode');
});

```

### darkMode.toggle(force)

Returns a promise.

#### force

Type: `boolean`  
Default: `null`

Force a specific mode, `true` for dark and `false` for light.

### darkMode.isDark()

Returns a promise for a boolean of whether you're in dark mode.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
