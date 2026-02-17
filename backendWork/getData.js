// function sum(a,b){
//     return a+b;
// }

async function fetchData(){
    const serverData = await fetch("https://fakestoreapi.com/products");
    const data = await serverData.json();
    console.log(data);
    return data;
}

module.exports=fetchData;