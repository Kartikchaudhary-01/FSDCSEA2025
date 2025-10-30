// // console.log("hello world")

// // const div=document.getElementsByTagName('div');
// // console.log(div);
// // div[0].innerText="hello world";
// // div[0].style.color="brown";
// // div[0].style.backgroundColor="yellow";

// const container= document.getElementsByClassName('container');
// console.log(container);
// container[0].innerHTML='<h2>Welcome to abes</h2>';

// const h1=document.createElement('h5');
// h1.innerText="cse student";
// h1.style.color='brown';
// console.log(h1);
// container[0].appendChild(h1);

// const img=document.createElement('img');
// img.src="Screenshot 2025-08-28 222246.png";
// img.setAttribute("height",'200px');
// img.setAttribute("width",'250px');
// console.log(img);
// // function img_display(){
    
// // }

// const button=document.getElementById('display');
// console.log(button);
// function displayData(){
//     document.getElementById('disp').innerHTML="<h2>Data is loading.....</h2>";
//     setTimeout(()=>{
//         console.log("hi...inside display");
//         document.getElementById('disp').innerHTML="";
//         container[0].appendChild(img);
//     },1000);
    

// }
// button.addEventListener('click',displayData);
// // button.addEventListener('dblclick',img_display);

// const button=document.getElementById('display');
// console.log(button);
// function longData(){
//     console.log("start");
// }
// for(let i=0;i<1000000;i++){
//     console.log(i);
// }
// console.log("end");
// button.addEventListener('click',longData);

// function msg(){
//     console.log("hello world");
// }

// console.log("start");
// setTimeout(msg,0);
// console.log("end");

// function msg(msg){
//     console.log("hello world "+msg);
// }
// function msgHandler(arg,clbk){
//     console.log("start "+new Date().getDate());
//     clbk(arg);
// }
// // const name= document.getElementById('inputField');
// // name.addEventListener('input',()=>{
// //     console.log("input event");
// //     msgHandler(name.value,msg);
// // });

// const arr=['darsh','yash','rohan','mohit','sachin'];
// arr.forEach((element,index) => {
//     console.log("hello "+element+" index is "+index);
//     msgHandler(element,msg);
// });

// setTimeout(()=>{
//     console.log("hello world 1");
//     setTimeout(()=>{
//         console.log("hello world 2");
//         setTimeout(()=>{
//             console.log("hello world 3");
//             setTimeout(()=>{
//                 console.log("hello world 4");
//                 console.log("hello world 4 end");
//             },1000);
//             console.log("hello world 3 end");
//         },1000);
//         console.log("hello world 2 end");
//     },1000);
//     console.log("hello world 1 end");
// },1000);

// const myPromise = new Promise((resolve,reject)=>{
//     const error=false;
//     if(!error){
//         resolve("yes resolved, everything went fine");
//     }
//     else{
//         reject("no rejected, something went wrong");
//     }
// });
// myPromise.then((message)=>{
//     console.log("inside then "+message);
// }).catch((message)=>{
//     console.log("inside catch "+message);
// }).finally(()=>{
//     console.log("inside finally");
// });

// async function promiseHandler(){
//     try{
//         const data = await myPromise;
//         console.log("inside try "+data);
//     }catch(error){
//         console.log("inside catch "+error);
//     }finally{
//         console.log("inside finally");
//     }
// }

// promiseHandler();

// const button=document.getElementById('display');
// function fetchData(){
//     console.log("fetching data....");
//     fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
//         console.log("inside first then");
//         return response.json();
//     }).then(data=>{
//         console.log("inside second then");
//         console.log(data);
//     }).catch(error=>{
//         console.log("inside catch");
//         console.log(error);
//     }).finally(()=>{
//         console.log("inside finally");
//     });
// }
// button.addEventListener('click',fetchData);

const button=document.getElementById('display');
async function fetchData(){
    console.log("fetching data....");
    const response=await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    console.log(data[0].image + " % " +data[0].title +" % "+data[0].id +" % "+data[0].price +" % "+data[0].description);
    
    
    
    const img=document.createElement('img');
    img.src=data[0].image;
    img.setAttribute("height",'200px');
    img.setAttribute("width",'250px');
    document.getElementById('disp').appendChild(img);
    document.getElementById('disp').innerHTML+=data[0].title;
    document.getElementById('disp').innerHTML+=data[0].description;
    document.getElementById('disp').innerHTML+=data[0].price;
    document.getElementById('disp').innerHTML+=data[0].id;
    


}
button.addEventListener('click',fetchData);