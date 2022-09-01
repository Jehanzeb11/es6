// rest opt

// const foo = (str,...nums) =>{
//     sum = 0
//  for(let key in nums){
// sum += nums[key]
//  }

//  console.log(str+" "+sum)
// }

// foo('JEHANZEB',12,13,14,15)








// spread opt use in array



// const foo = (str,...nums) =>{
// sum = 0
// for (let i in nums){
//     sum += nums[i]
// }
// console.log(`${str} ${sum}`)
// }
// foo("jehanzeb",...[12,13,14,15])


// new concatinating in array 

// let a = [12,13,12]
// let b = [21,31,21]

// let ab = [...a,...b]
// console.log(ab)



// new concatinating in Object


// let a = {
//     name : 'jan',
//     job : 'none'

// }
// let b = {
//     age : 19
// }

// let ab = {...a,...b}
// console.log(ab)









// object literals


// let name = 'jan'
// let age = 19

// let obj ={
//     name,
//     age
// }
// console.log(obj)





// name = 'jan'
// let age = 19

// let obj ={
//     [name + " n"] : 'nope',
//     [age] : 20,
//     show(){
// let num = 21+21
// return num
//     }
// }
// console.log(obj["show"]())









// destructuring Array



// let arr = [12,'karachi','lol',['male','jehanzeb']]

// let [age = 15,city,humor,[gender,name]] = arr



// console.log(age)
// console.log(city)
// console.log(humor)
// console.log(name)





// in function

// method 1

// const show = ([name,city,country]) =>{
// console.log([name,city,country])
// }
// show(['jan','karachi','pakistan'])



// method 2 



// const show = () =>{
//   return  ['jan','karachi','pakistan']
//     }
//  let [name,city,country] = show()

// console.log(city)







// destructuring Object




// let obj = {
//     name : 'jehanzeb',
//     city : 'karachi',
//     age : 19
// }

// // remember your variable name should be your object proprty name


// let {name,city,age} = obj;


// console.log(city)













// ternary opt
 
// let age = 21

// if else condition

// let check = (age >= 20) ? 'beer': 'juice'

// console.log(check)






// let age = 19

// if elseif and else condition

// let check = age >= 20 ? 'beer' : age ===20 ? 'juice' : 'hehe'

// console.log(check)