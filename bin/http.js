const axios = require('axios');
class Client {
    run(params, dir) {
        let method = params.shift();
        switch (method) {
            case undefined:
                console.log('example: http [get] [url]');
                break;
            case 'get':
                let url = params.shift();
                this.get(url);
                break;
            case 'post':

                break;
            case 'put':

                break;
            case 'delete':

                break;
            default:
                console.log('不支持的请求方式: ', method);
                break;
        }
    }

    async get(url) {
        if (!url) {
            console.log('请输入url地址');
            return;
        }
        try {
            let result = await axios.get(url);
            console.log(result.data);
        } catch (e) {
            console.log('请求出错: ', e);
        }

    }

    post(url, params) {

    }

    put(url, params) {

    }

    delete(url) {

    }
}
module.exports = new Client();