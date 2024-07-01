console.log("hi welcome");
a=8;
var a=2;
let g="hello";
b=true;
console.log("the data type is "+typeof(a));
console.log(typeof(g));
console.log(typeof(b));
// Java script objects
let person={
    name :'vaigu',
    age:18,
    location:'tvm',

}
console.log(person.name)
let arr=['kira','zoro',69]
console.log(arr.length)
let arr_obj=[{age:32,location:'tvm'},{age:56,location:'chennai'}]
console.log(arr_obj[1].location);
function add(a,b)
{
     
    var sum=a+b;
    return sum;
}
let result=add(20,30);
console.log(result);
var a=1;
var b=++a;
console.log(a);
console.log(b);
var a1=99;
var a2='99';
if (a1>a2) {
    console.log('a1 is greater')
    
} 
else if(a1==a2){
    console.log('a1 is same as a2 and the value is'+a1)

}else {
    console.log('a2 is greater')
    
}
var arr2=[10,20,30,40]
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
    
}
for (const i of arr2) {
    console.log(i)
    }
