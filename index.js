#!/usr/bin/env node
const fs = require('fs');
var arguments = process.argv;
let node = arguments.shift();
let script = arguments.shift();
let bin = __dirname + '/bin/';
if (arguments.length == 0) {
    bin += 'help.js';
} else {
    let name = arguments.shift();
    bin += name + '.js';
    // console.log(bin);
    if (!fs.existsSync(bin)) {
        console.log('功能不存在:', name);
        return;
    }
}
let app = require(bin);
app.run(arguments, process.cwd());
