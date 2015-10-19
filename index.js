'use strict';
var os = require('os');
var path = require('path');
var execFile = require('child_process').execFile;
var requiredOS = process.platform === 'darwin' && Number(os.release().split('.')[0]) >= 14;
var bin = path.join(__dirname, 'dark-mode');

exports.toggle = function (force, cb) {
	if (!requiredOS) {
		throw new Error('OS X 10.10+ only');
	}

	if (typeof force !== 'boolean') {
		cb = force;
		force = null;
	}

	cb = cb || function () {};

	var args = typeof force === 'boolean' ? ['--mode', force ? 'Dark' : 'Light'] : [];

	execFile(bin, args, function (err) {
		cb(err);
	});
};

exports.isDark = function (cb) {
	if (!requiredOS) {
		throw new Error('OS X 10.10 only');
	}

	execFile(bin, ['--mode'], function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, stdout.trim() === 'Dark');
	});
};
