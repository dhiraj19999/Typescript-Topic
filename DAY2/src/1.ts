
// ENUM


enum Gender{

    male="male",
    female="female",
    other="other"
}

let gender:Gender=Gender.male


// TUPLE  => exactly how many elements in an arry

let arr:[number,string]=[2,"dhiraj"]

//arr[0]="F"  error

let arr_2d:Array<[number,number]>=
[


    [2,3],// ok 
    [3,4],
   // [3,4,5] error
]


// GENERIS  ==> A way of passing types to functions along side parameters

// if output type is realted to input type
// dynamic type passing
//

const getIdentity=<T>(arg:T):T=>{

    return arg

}

let a:string="hello"
let b:number=12
let c:boolean=true

getIdentity <boolean>(c)
getIdentity <number>(b)