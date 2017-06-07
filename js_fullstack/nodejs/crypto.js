'use strict';

//提供通用的加密和哈希算法


//MD5和SHA1

const crypto = require('crypto');

var crypto_main = function(){
   const hash = crypto.createHash('md5');
   
   hash.update('Hello,world');
   hash.update('Hello,nodejs');
   console.log(hash.digest('hex'));

   const hash2 = crypto.createHash('sha1');
   hash2.update('Hello,nodejs');
   console.log(hash2.digest('hex'));
   
   //Hmac算法：也是一种哈希算法，需要一个密钥
   const hmac = crypto.createHmac('sha256','secret-key');
   
   hmac.update('Hello,world!');
   hmac.update('Hello,nodejs!');

   console.log(hmac.digest('hex'));

   //AES算法
   //加密
   function aesEncrypt(data,key){
       const cipher = crypto.createCipher('aes192',key);
       var crypted = cipher.update(data,'utf8','hex');
       crypted+=cipher.final('hex');
       return crypted;
   }

   //解密
   function aesDecrypt(encrypted,key){
       const decipher = crypto.createDecipher('aes192',key);
       var decrypted = decipher.update(encrypted,'hex','utf8');
       decrypted+=decipher.final('utf8');
       return decrypted;
   }


   var data = 'SecretMessage';
   var key = 'key';

   var encrypted = aesEncrypt(data,key);
   console.log('data:'+data);
   console.log('Encrypted:'+encrypted);

   var decrypted = aesDecrypt(encrypted,key);
   console.log('decrypted:'+decrypted);

   //Diffie-Hellman算法：密钥交换协议
   var john = crypto.createDiffieHellman(512);
   var john_keys = john.generateKeys();

   //素数
   var prime = john.getPrime();
   var generator = john.getGenerator();

   console.log('Prime:'+prime.toString('hex'));
   console.log('Generator:'+generator.toString('hex'));

   var tom = crypto.createDiffieHellman(prime,generator);
   var tom_keys = tom.generateKeys();

   var john_secrets = john.computeSecret(tom_keys);
   var tom_secrets = tom.computeSecret(john_keys);

   console.log('secret of john:'+john_secrets.toString('hex'));
   console.log('secret of tom:'+tom_secrets.toString('hex'));

};

module.exports = crypto_main;
