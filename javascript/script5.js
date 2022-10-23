

var date=new Date(2022,9,20,11,10,12);
function getTimeStamp(){
    var x=addZero(date.getHours())+":"
+addZero(date.getMinutes())+
":"+addZero(date.getSeconds());
    var y=addZero(date.getDate())+"/"
+addZero(date.getMonth())+
"/"+addZero(date.getFullYear());
    return x+"  "+y;
}
function addZero(input){
   if(input<10)
   {
    input="0"+input;
   }
   return input;
}
function
checkTheTimeDiiffernce(previousDate){
     previousDate=addZero(date.getSeconds())
     var differnce=previousDate;
    switch(differnce){
       case 12:
       console.log("Previous Time (seconds is 12)");
        break;
      }
     
}
checkTheTimeDiiffernce(date,actualdate);
   console.log(getTimeStamp());
   var actualdate=new Date();
   function timeToday(){
   var x=actualdate.getHours()+":"
+actualdate.getMinutes()+
":"+actualdate.getSeconds();
    var y=actualdate.getDate()+"/"
+actualdate.getMonth()+
"/"+actualdate.getFullYear();
    return x+"  "+y;
   }
    var abc=actualdate.getSeconds()
    switch(abc){
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        console.log("Actual Time (second is)"
);
         break;
    }
console.log(timeToday());























































//  var date = new Date()
// // console.log(date);
// // console.log(date.getDate());
// // console.log(date.getFullYear());
// // console.log(date.getMonth());
//  console.log(date.getTime());
// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // var date = new Date();
// function getTimeStamp() {
//     var x = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
//     var y = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + addZero(date.getFullYear());
//     return x + "  " + y;
// }
// function addZero(value){
//         if(value < 10){
//             value ="0"+value;
//         }
//         return value;
//     }
// console.log(getTimeStamp())















// var a = 100.1624;
// console.log(a.toFixed(2));
// console.log(a.toPrecision(5))

















// function outer(){
//     var a ,b
//     function inner(){
//         a = 10,b = 20
//         console.log(a)
//         console.log(b)
//     }
//     inner();
//     return inner;
// }
// var m = outer();
// console.log(m);
// m();












// var arr = ["12","23","34"]
//  function f5(a){
//     console.log(a)
//     a[0] = 1
//     a[1] = 2
//     a[2] = 3
//     a[3] = 4
//  }
//  f5(arr)
//  console.log(arr)




// var obj = {
//     id : 202,
//     name : "hemanth",
//     adress : "hyd"
// }

// function f4(g){
//     console.log(g.id)
//     g.name = "toni";
//     g.landmark = "eluru"
// }
// f4(obj)
// console.log(obj)


// var x = 100
//  function f1(a){
    
//     console.log(a)
//     a = 100
// }
// f1(x);
// console.log(x);

// var s  = "hemanth"
// function f2(b){

//     console.log(b)
//     b = "karun"
// }
// f2(s);
// console.log(s)

// var boolean = true

// function f3(d){
//     console.log(d)
//     d = false

// }
// f3(boolean)
// console.log(boolean)


// var e = {
//     id : 201,
//     name :"hemanth",
//     getdetails: function(city,state,...restparams){
//         // console.log(arguments)
//         // console.log(restparams)
//         return this.id + "\t" + this.name+"\t"+ city + "\t" + state;
//     }
// } 
// console.log(e.getdetails("hys","hyd"));

// var f = {
//     id : 344,
//     name :"karun"
// }
// var arr = ["hyd","vzg","india"]
// console.log(e.getdetails.call(f,arr[0],arr[1]))
// console.log(e.getdetails.apply(f,arr))
// var r = e.getdetails.bind(f,"h","y")
// console.log(r)
// console.log(r());



