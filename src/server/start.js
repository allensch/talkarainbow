var key, local;

const cpus = require('os').cpus().length;
const throng = require('throng');

try {
    local = require('../../local.json');
    for (key in local) {
        process.env[key] = local[key];
    }
} catch (err) {
    console.log('File local.json not found.')
}

const MAX_CPUS = process.env.MAX_CPUS || 'max';
const IS_DEV = process.env.NODE_ENV === 'development';

function count() {
	const max = parseInt(MAX_CPUS)
    const value = MAX_CPUS === 'max' ? cpus : max > 0 ? max : cpus
    // we only need 1 core running during development
    return IS_DEV ? 1 : Math.max(1, Math.min(value, cpus))
}

function start() {
    if (IS_DEV) {
        require('babel-register');
    }
    require('./app').start();
}

throng(start, {
    workers: count(),
    lifetime: Infinity
});
