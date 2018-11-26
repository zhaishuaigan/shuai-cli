const fs = require('fs');
module.exports = {
    run(params) {
        let configFile = __dirname + '/config.json';
        let config = fs.readFileSync(configFile);
        config = JSON.parse(config.toString());

        var key = '';
        switch (params.length) {
            case 0:
                console.log(config);
                break;

            case 1:
                key = params.shift();
                if (config[key] !== undefined) {
                    let val = config[key];
                    console.log(val);
                } else {
                    console.log('获取配置失败, 配置不存在:', key);
                }
                break;

            default:
                key = params.shift();
                let val = params.join(' ');

                switch (val) {
                    case 'true': val = true; break;
                    case 'false': val = false; break;
                    case 'null': val = null; break;
                }
                config[key] = val;
                console.log('配置设置成功: ', key + ' = ' + val);
                fs.writeFileSync(configFile, JSON.stringify(config));
                break;
        }
    }
}