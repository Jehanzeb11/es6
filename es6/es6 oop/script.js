// class objects


// class classObjects{
//     constructor(name){
//          this.abc = name;
//         console.log('lol')
//     }
//     hello(){
//         console.log('lmao'+' '+this.abc)
//     }
//     static fun(){
// console.log('lmfao')
//     }
// }

// let obj = new classObjects('jehanzeb')

// obj.hello()

// classObjects.fun();











// promises

// let prom = new Promise((resolve,reject)=>{
//     let num = 5+5;
//     if(num === 10){
//         resolve(`Your answer is :  ${num}`)
//     }else{
//         reject("calculation failed")
//     }
// })

// prom.then((result)=>{

// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })



















// ajax



// const data=()=>{
//     let req = new XMLHttpRequest();

// req.onreadystatechange = function(){
// if(this.readyState === 4 && this.status === 200 ){
// document.getElementById('demo').innerHTML = this.responseText
// }
// }

//     req.open("get","https://jsonplaceholder.typicode.com/posts",true);
//     req.send();
// }











// async and await



// const foo = async ()=>{
//     return (await (fetch("json/names.json"))).json()
// }

// foo().then((resolve)=>{
// console.log(resolve)
// }).catch((error)=>{
// alert(error)
// })

// console.log("lol")