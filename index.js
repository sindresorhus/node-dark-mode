'use strict';
const os = require('os');
const path = require('path');
const childProcess = require('child_process');
const pify = require('pify');
const execFile = pify(childProcess.execFile);
const requiredOS = process.platform === 'darwin' && Number(os.release().split('.')[0]) >= 14;
const bin = path.join(__dirname, 'dark-mode');

exports.toggle = force => {
	if (!requiredOS) {
		return Promise.reject(new Error('OS X 10.10+ only'));
	}

	return execFile(bin, typeof force === 'boolean' ? ['--mode', force ? 'Dark' : 'Light'] : []);
};

exports.isDark = () => {
	if (!requiredOS) {
		return Promise.reject(new Error('OS X 10.10+ only'));
	}

	return execFile(bin, ['--mode']).then(x => x.trim() === 'Dark');
};
