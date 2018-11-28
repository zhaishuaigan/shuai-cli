const axios = require('axios');
const path = require('path');
const request = require('request');
class Client {
    run(params, dir) {
        let method = params.shift();
        switch (method) {
            case undefined:
                console.log('example: http [get] [url]');
                break;
            case 'get':
                this.get(params);
                break;
            case 'post':
                this.post(params);
                break;
            case 'put':
                this.put(params);
                break;
            case 'delete':
                this.delete(params);
                break;
            default:
                console.log('不支持的请求方式: ', method);
                break;
        }
    }

    async get(params) {
        let url = params.shift();
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

    async post(params) {
        let url = '';
        let data = {};
        let param = '';
        while (param = params.shift()) {
            switch (param) {
                case '-u':
                case '--url':
                    url = params.shift();
                    break;
                case '-p':
                case '--params':
                    let p = params.shift().split('=');
                    data[p.shift()] = p.shift();
                default:
                    if (param.substring(0, 4) === 'http') {
                        url = param;
                    }
                    break;
            }
        }

        if (!url) {
            console.log('Error: 使用方法应该是 ( http post -u $url [-p $field=$value] )');
            return;
        }

        let result = await axios.post(url, data);
        console.log(result.data);

        // request.post({ url: url, formData: data })
        //     .on('error', function (err) {
        //         console.log(err)
        //     })
        //     .on('response', function (response) {
        //         console.log('状态: ', response.statusCode)
        //         console.log('响应头: ', response.headers['content-type'])
        //     })
        //     .on('data', function (body) {
        //         console.log('返回值: ', body.toString())
        //     })

    }

    async put(params) {
        let url = '';
        let data = {};
        let param = '';
        while (param = params.shift()) {
            switch (param) {
                case '-u':
                case '--url':
                    url = params.shift();
                    break;
                case '-p':
                case '--params':
                    let p = params.shift().split('=');
                    data[p.shift()] = p.shift();
                default:
                    if (param.substring(0, 4) === 'http') {
                        url = param;
                    }
                    break;
            }
        }

        if (!url) {
            console.log('Error: 使用方法应该是 ( http put -u $url [-p $field=$value] )');
            return;
        }

        let result = await axios.put(url, data);
        console.log(result.data);
    }

    async delete(params) {
        let url = params.shift();

        if (!url) {
            console.log('Error: 使用方法应该是 ( http delete $url )');
            return;
        }

        let result = await axios.delete(url);
        console.log(result.data);
    }
}
module.exports = new Client();