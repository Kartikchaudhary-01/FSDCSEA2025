// function info(name,age,branch){
//     return "my name is "+name+" age is "+age+" branch is "+branch;
// }
// const data = function(name,age,branch){
//     return "my name is "+name+" age is "+age+" branch is "+branch;
// }
// const data = ((name,age,branch) => {
//     return "my name is "+name+" age is "+age+" branch is "+branch;
// })
// const data = (() => {
//     let name = "kartik";
//     let age = 32;
//     let branch = "cs";
//     return "my name is "+name+" age is "+age+" branch is "+branch;
// })
// (function() {
//     let name = "kartik";
//     let age = 32;
//     let branch = "cs";
//     console.log("my name is "+name+" age is "+age+" branch is "+branch);
// })();
// console.log(info("kartik",32,"cse"));
// // console.log(data("ksrtik",32,"cse"));
// console.log(data("🙏"));

// setTimeout(function(){console.log("hi")},1000);

function selectLang(lang="c"){
    let data;
    if(lang=="java"){
        function javaCompiler(){
            return "java compiler calling"
        }
        data=javaCompiler();
    }
    else if(lang=="python"){
        function pythonCompiler(){
            return "python compiler calling"
        }
        data = pythonCompiler();
    }
    else{
        data="lang not supported";
    }
    return data;
}

console.log(selectLang("java"));