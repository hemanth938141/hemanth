
// function f(a){
//     // console.log(arguments);
//     // console.log(arguments[3]);
//     a();
// }
// f(function(){
//     console.log("anonymus");
// });
//var arr = [10,20,30,40];
// function foreach(input){
//     for(var i = 0;i<arr.length;i++){
//             input(arr[i]);
//     }
// }
//  arr.forEach(function(value){
//      console.log(value);
    
// });
// function f1(a){
//     a();
// }
// function f2(b){
//     b();
// }
var  call = function(width,height){
    return width*height;
     
 }
 console.log(call(3,4));
 
// f1(call);
// f2(call);
(function(){
    console.log("anonymus");
}) ();