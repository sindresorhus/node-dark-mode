'use strict';
const runJxa = require('run-jxa');

const prop = `Application('System Events').appearancePreferences.darkMode`;

exports.enable = () => runJxa(`${prop} = true`);
exports.disable = () => runJxa(`${prop} = false`);

exports.toggle = force => {
	if (typeof force === 'boolean') {
		return force ? exports.enable() : exports.disable();
	}

	return runJxa(`${prop} = !${prop}()`);
};

exports.isDark = () => runJxa(`return ${prop}()`);
