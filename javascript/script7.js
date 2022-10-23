function customer(name,balance,accno){
    this.name = name;
    this.balance = balance;
    this.accno = accno;
    
    

}
customer.prototype.deposit = function (amount){
    this.balance += amount;
}
customer.prototype.transfer = function (amount1,reciever){
    this.balance = this.balance - amount1;
    reciever.balance = reciever.balance + amount1;

}


var c1 = new customer("hemanth",12000,101);

var c2 = new customer("toni",15000,102);
console.log(c2)
//c1.deposit(1000);

c1.transfer(1000,c2);
console.log(c1)









































// var bank = {
//     bank_name: "Sbi",
//     branch : "madhapur"

// }
// var customer = Object.create(bank);
// customer.name = "hemanth";
// customer.branch1 = "hitech city"


// console.log(customer.bank_name)
// console.log(customer.branch)

// var c = Object.freeze({
//     name : "h"
// })
// var f = Object.keys(c);
// console.log(f)
// var r = Object.values(c);
// console.log(r)





















// var str = "hello world"
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.substring(0,6))
// console.log(str.startsWith("h"))
// console.log(str.length);
// console.log(str.split(" "))

// var url = "https://www.flipkart.com/"
// var uname = "hemanth";

// console.log(uname.link(url))
// console.log(uname.bold())
// console.log(uname.fontsize("10"))
// console.log(uname.fontcolor("red"))
// console.log(uname.italics())