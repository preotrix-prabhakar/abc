// var person={
//     name:"prabhakar",
//     "cost to company":2000,
//     func:()=>{
//         console.log('fun is being done by prabhu');
//     }
// }
// console.log(person["cost to company"]);
// person.func();


// function person2(abc){
//     this.name=abc,
   
//     this.operate=()=>console.log("operating default constructor");  
// }
// person3=new person2('sonu');
// console.log(person3);
// console.log(person3.name);  
// // person2.operate();
// person3.operate();
// pers = new Object();
// pers.abc="asdfsdf"
// console.log(pers.abc);

// var obj1={
//     key:10
// }
// var obj2=obj1
// obj2.key=obj1.key
// obj1.key=50;
// console.log(obj1.key);
// console.log(obj2.key);
var person={
    name:"prabhakar",
    age:20,
    func:()=>{
        console.log('fun is being done by prabhu');
    }
}
// person.func();
console.log(person);
let person2=Object.create({
    name:"shivakar",
    age:24,
    func:()=>{
        console.log('fun is being done by shivu');
    }
})
console.log(person2);
