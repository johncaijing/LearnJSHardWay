'use strict';

//提供通用的加密和哈希算法


//MD5和SHA1

const crypto = require('crypto');

var crypto_main = function(){
   const hash = crypto.createHash('md5');
   
   hash.update('Hello,world');
   hash.update('Hello,nodejs');
   console.log(hash.digest('hex'));

//    console.log(hash.digest('sha1'));

};

module.exports = crypto_main;
