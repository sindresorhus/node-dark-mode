'use strict';
var os = require('os');
var execFile = require('child_process').execFile;
var isYosemite = (process.platform === 'darwin' && /^14/.test(os.release()));

exports.toggle = function (force, cb) {
	if (!isYosemite) {
		throw new Error('OS X 10.10 only');
	}

	if (typeof force !== 'boolean') {
		cb = force;
		force = null;
	}

	cb = cb || function () {};

	var args = typeof force === 'boolean' ? ['--mode', force ? 'Dark' : 'Light'] : [];

	execFile('./dark-mode', args, {cwd: __dirname}, function (err) {
		cb(err);
	});
};

exports.isDark = function (cb) {
	if (!isYosemite) {
		throw new Error('OS X 10.10 only');
	}

	execFile('./dark-mode', ['--mode'], {cwd: __dirname}, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, stdout.trim() === 'Dark');
	});
};
