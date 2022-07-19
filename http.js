const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log(req.url);
    if(req.url === '/shit.html') {
        res.write(fs.readFileSync('./shit.html', 'utf8'));
    } else {
        res.write(fs.readFileSync('./index.html', 'utf8'));
    }
    res.end();
}).listen(8080);
console.log('sucess!')
console.log('http://127.0.0.1:8080/');




// const http = require("http");
// const index = fs.readFileSync("./index.html", "utf8");
// const profile = fs.readFileSync("./shit.html", "utf8");
// const page_404 = fs.readFileSync("./page_404.html","utf8");

//  http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
    
//     switch(req.url){
//         case "/shit.html":  
//             res.write(profile);
//             break;
//         case "/index.html": case "/":
//             res.write(index);
//             break;
//         // default:
//         //     res.writeHead(404, { "Content-Type": "text/html" });
//         //     res.write(page_404)
//         //     break;

//     }
//     res.end();
//   })
//   .listen(8080);