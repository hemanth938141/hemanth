// var date1 = new Date();

// console.log(date1.getHours()+": "+date1.getMinutes()+": "+date1.getSeconds()+"      "+ date1.getDate()+"/"+date1.getMonth()+"/"+date1.getFullYear);

var date = new Date(2022, 8, 22, 06, 01, 10);
function getTimeStamp() {
    var x = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
    var y = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + addZero(date.getFullYear());
    return x + "  " + y;
}
function addZero(input) {
    if (input < 10) {
        input = "0" + input;
    }
    return input;
}

 function check(previousdate,actualdate){

     var dif = "seconds";"minutes";"hours";
     switch(dif){

         case "seconds" : 
         case "minutes" :
         case "hours" :
            console.log((-(previousdate.getHours() - actualdate.getHours())) +"hours"+(-(previousdate.getMinutes() - actualdate.getMinutes())) +"minutes"+(-(previousdate.getSeconds() - actualdate.getSeconds())) +"seconds"+ "ago")
            
        }

 }
 var actualdate = new Date()

console.log(getTimeStamp());
check(date,actualdate);


