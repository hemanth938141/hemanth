// function print(){
//     var arr = ["k","t","p"];
//     arr.forEach(function(value){
//         console.log(value)
//     })

// }
// print();

// var print2 = () =>{
//     var arr = ["k","t","p","y"];
//     arr.forEach(value => console.log(value))
// }
// print2();
// function f1(a=10,b=20){
//     console.log(a)
//     console.log(b)
// }
// f1();

// var f =(a=10,b=20)=>{
   
//     console.log(a+b)
// }
// f();
function f1(a,b,c,...restparams){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(restparams.slice(0,3))
    

}
var arr =[1,2,3,4,5,6];
f1(...arr)
var user = "sai"
var sender = "karun"
var str =`hello ${user},
                            your name is karun
           thanks,
           ${sender} `
           console.log(str)


           

