'use strict';

//global
//Node.js环境中的唯一的全局对象

//process
//代表Nodejs进程
//JS程序是事件驱动执行的单线程模型
//NodeJS也是
function basic_module(){
    console.log('global:-----------\n');
    console.log(global.console);
    console.log('process:----------\n');
    console.log(process);


    process.nextTick(function(){
        console.log('nextTick callback');
    });

    console.log('nextTick was set');

    process.on('exit',function(code){
       console.log('exit with code:'+code);
    });

    if(typeof(window)==='undefined'){
        console.log('node.js');
    }else{
        console.log('browser');
    }
}


module.exports = basic_module;

