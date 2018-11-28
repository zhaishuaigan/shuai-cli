const fs = require('fs');
const path = require('path');
const request = require('request');

class Upload {
    run(params, dir) {

        let field = 'file';
        let file = '';
        let url = '';
        let data = {};
        let param = '';
        while (param = params.shift()) {
            switch (param) {
                case '-f':
                    file = params.shift();
                    break;
                case '-n':
                case '--name':
                    field = params.shift();
                case '-u':
                case '--url':
                    url = params.shift();
                    break;
                case '-p':
                case '--params':
                    let p = params.shift().split('=');
                    data[p.shift()] = p.shift();
                    break;
            }
        }
        if (!field || !url) {
            console.log('Error: 使用方法应该是 ( upload -f $local_path -u $url [-n $field] [-p $field=$value] )');
            return;
        }

        data[field] = fs.createReadStream(path.join(dir, file));
        request.post({ url: url, formData: data })
            .on('error', function (err) {
                console.log(err)
            })
            .on('response', function (response) {
                // console.log('状态: ', response.statusCode)
                // console.log('响应头', response.headers['content-type'])
            })
            .on('data', function (body) {
                console.log(body.toString())
            })

    }
}
module.exports = new Upload();