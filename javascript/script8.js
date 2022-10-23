
function p(pass){
    if(pass.length < 3){
        throw new error("not possible")

    }
    if(pass.length>6){
        pass ==="abcd"?console.log("success"):console.log("failure")
    }

}
try{
    p("ab")
    }catch(error){
        console.log(error.message);
    }

console.log("next code")




















// var a = 10;
// var b = 20;
// try{
// console.log(c);
// }catch(error){
//     console.log(error)
// }
// console.log(a)
// console.log(b)

// var employee = null;
// function emp(){
//     console.log("db connected")

//     // employee = {
//     //     name : hemanth,
//     //     id : 1
//     // }
// }
// emp();
// try{
// console.log(employee.id)
// console.log(employee.name)
// }catch(error){
//     console.log(error)
// }
// finally{
//     console.log("db connection close")
// }
// var s = {
//     name :"karun"
// }
// console.log(s.name)