const axios = require('axios');

axios.interceptors.request.use(function(config) {
    console.log('before request');
    return config;
})

axios.interceptors.response.use(function(res) {
    console.log('before response');
    return res;
})
axios.get('https://www.unjs.com/h/b/889323.html').then(res => {
    console.log(res);
}, error => {
    console.error(error);
})
