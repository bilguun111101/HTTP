// const readline = require('readline');
// const rl = readline.createInterface( {
//     input: process.stdin,
//     output: process.stdout
// } )

// rl.question('Enter numbers: ', (numbers) => {
//     let arrNumber = numbers.split(' ');
//     let sum = 0;
//     arrNumber.forEach(numberAndNaN => {
//         if(numberAndNaN !== ''){
//             sum += parseInt(numberAndNaN);
//         }
//     })
//     console.log(sum);
//     rl.close();
// })

// const log =  require('./loger');
// // log("message");
// console.log(log.dude(5))
const http = require('http');
const keepAliveAgent = new http.Agent({ keepAlive: true });
options.agent = keepAliveAgent;
http.request(options, onResponseCallback);

socket.setKeepAlive(true, this.keepAliveMsecs);
socket.unref();
return true;