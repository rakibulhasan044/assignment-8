const obj = [
    {age: 12, name:'a'},
    {age: 14, name:'b'},
    {age: 16, name:'c'},
    {age: 16, name:'d'},
    
]

// const {age} = obj;
// console.log(age)
for(let age of obj){
    console.log(age.age);
}