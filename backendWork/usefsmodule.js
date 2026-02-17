const fs=require('fs');
const fs1=require('fs').promises;
function writeData(){
    let statusmsg="";
    try{
        
        fs.writeFileSync("data.txt","This is data file");
        statusmsg = "File created successfully";
    }catch(err){
        statusmsg="err: "+err;
    }
    return statusmsg;
}

function readData(){
    let readmsg="";
    try{
        readmsg = fs.readFileSync("data.txt","utf-8");
    }catch(err){
        readmsg="err: "+err;
    }
    return readmsg;
}

function deleteData(){
    try{
        fs.unlinkSync("data.txt");
        return "File deleted successfully";
    }
    catch(err){
        return "err: "+err;
    }
}

function appendData(){
    let appendmsg="";
    try{
        fs.appendFileSync("data.txt","This is appended data");
        appendmsg = "Data appended successfully";
    }
    catch(err){
        appendmsg = "err: "+err;
    }
    return appendmsg;
}
function copyData(){
    let copymsg="";
    try{
        fs.copyFileSync("data.txt","dataCopy.txt");
        copymsg = "Data copied successfully";
    }
    catch(err){
        copymsg = "err: "+err;
    }
    return copymsg;
}

module.exports={writeData,readData,deleteData,appendData,copyData};
