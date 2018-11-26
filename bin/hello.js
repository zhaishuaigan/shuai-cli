var inquirer = require('inquirer');

module.exports = {
    run(args) {
        console.log('参数:', args);
        if (args.length) {
            console.log('Hello ' + args[0]);
            return;
        }
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: '请输入你的名字: '
            }
        ]).then(answers => {
            console.log('Hello ' + answers.name);
        });
    }
}
