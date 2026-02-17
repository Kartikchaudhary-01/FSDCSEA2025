//make index.js file
//npm i nodemon
//npm init -y
const http=require('http')
const PORT=4005;
const sum= require('./getData');
const fetchData = require('./getData');

const {writeData,readData,deleteData,appendData,copyData} = require('./usefsmodule');




const server=http.createServer((req,res)=>{
    // res.setHeader('Content-Type','application/json');

    // res.end("<h2>Hiiiii...</h2>");

    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        res.end('<h2 style="color:white; background:red; text-align:center"> Welcome to Node Server </h2>');
    }
    if(req.url=="/datawrite" && req.method=="GET"){
        res.setHeader('Content-Type','application/json');
        const status = writeData();
        res.end(JSON.stringify({msg:status}));
    }
    if(req.url=="/dataread" && req.method=="GET"){
        res.setHeader('Content-Type','application/json');
        const rstatus = readData();
        res.end(JSON.stringify({msg:rstatus}));
    }
    if(req.url=="/datadelete" && req.method=="GET"){
        res.setHeader('Content-Type','application/json');
        const delstatus = deleteData();
        res.end(JSON.stringify({msg:delstatus}));
    }
    if(req.url=="/dataappend" && req.method=="GET"){
        res.setHeader('Content-Type','application/json');
        const appendstatus = appendData();
        res.end(JSON.stringify({msg:appendstatus}));
    }
    if(req.url=="/datacopy" && req.method=="GET"){
        res.setHeader('Content-Type','application/json');
        const copystatus = copyData();
        res.end(JSON.stringify({msg:copystatus}));
    }
    
    if(req.url=="/data" && req.method=="POST"){
        const s = fetchData();
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:s}));
    }

    if(req.url=="/data" && req.method=="PUT"){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:"Data updated successfully"}));
    }

    // console.log(Object.keys(req))
})


server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})