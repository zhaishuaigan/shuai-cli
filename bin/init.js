const fs = require('fs');
module.exports = {
    run(params, dir) {
        let name = params.shift();
        if (!name) {
            console.log('请输入要使用的模板名称');
            return;
        }
        console.log('寻找模板仓库: ' + name);
        console.log('克隆代码');
        console.log('提示设置 .git/config 的仓库地址');
    }
}