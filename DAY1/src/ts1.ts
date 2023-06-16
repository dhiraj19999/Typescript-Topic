
let a:string="hello"

// Union opertaor

let age: string | number="23"
age=23

let nam:"Dhiraj" | "Suraj"="Dhiraj"


// arry

let arr1:Array<number>=[2,4,5,6]
let arr2:string[]=["a","b"]
let arr3:Array<number | string>=[1,2,3,"f",6,6,"j"]
// read only for reading data we can't perform any operation on readonly like push 
let arr4: readonly string[]=["a","b"]
//arr4.push("wew") thorugh error

//  Object  

let detail:{id:number;name:string}={id:1,name:"dhiraj"}

// Custom types
// ?  is for opetional 
type User={id:number;name:string;age?:number}

let user1:User={id:1,name:"dhiraj"}

let arr_user:User[]=[
    {id:1,name:"dhiraj",age:23},
    {id:2,name:"dhiraj"},

]

type producttype={id:number;name:string;price:number;quantiy:number}

type cartItmstype={id:number,product:producttype[],total:number}
let cartItms:cartItmstype[]=[


    {id:1,
        product:[{id:1,name:"mobile",price:3000,quantiy:1},
        {id:1,name:"tablet",price:2000,quantiy:2}
    ],
total:30202}
]


// Functions //

const getIndexof=(arr:number[],index?:number):number =>{
if(!index) return -1
return arr[index]
}

let arrs:number[]=[1,2,3,4]
getIndexof(arrs,4)



