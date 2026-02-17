// const http=require('http');
// const PORT=4002;

// const server = http.createServer((req,res)=>{
// //     res.setHeader('Content-Type','application/json');
// //     // res.end('<h2> Welcome to Node Server </h2>');
// //     res.end(JSON.stringify({"msg":"Welcome to Node Server"}));
//     if(req.url=="/msg" && req.method=="GET"){
//         res.setHeader('Content-Type','text/html');
//         res.end('<h2> Welcome to Node Server </h2>');
//     }
//     // else{
//     //     res.setHeader('Content-Type','text/html');
//     //     res.end('<h2 style="color:red"> Invalid URL </h2>');
//     // }
//     else if(req.url=="/data" && req.method=="POST"){
//         res.setHeader('Content-Type','text/html');
//         res.end('<h2> Welcome to Node Server </h2>');
//     }
// })

// server.listen(PORT,()=>{
//     console.log(`Server is running on ${PORT}`)
// })

const http = require("http");

const PORT =4002;
const fetchServerData = require("./getData")
const server = http.createServer(async (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader("Content-Type","application/json");
    
    // res.end("hiii")
    // res.end("<h2>hiii....</h2>")
    if(req.url == "/data" && req.method=="GET"){
        res.setHeader("Content-Type","application/json");
        const result = await fetchServerData();
        console.log("result",result);
        res.end(JSON.stringify({msg:result}));
    }

    // else if(req.url == "/data" && req.method=="POST"){
    //     const result = await fetchServerData();
    //     console.log("result " + result)
    //     res.setHeader("Content-Type","application/json")
    //     res.end(JSON.stringify({msg:result}))
    // }
    // else if(req.url == "/data" && req.method=="PUT"){
    //     res.setHeader("Content-Type","application/json")
    //     res.end(JSON.stringify({msg:"data updated successfully"}))
    // }
    // else if(req.url=="/data" && req.method=="GET"){
    //     res.setHeader("Content-Type","application/json");
    //     const data= await fetchServerData();
    //     res.end(JSON.stringify({msg:data}));
    // }
})

server.listen(PORT,()=>{
    console.log("server is running at port ${PORT}");
})