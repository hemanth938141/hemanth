var str = "hello world1 lo L$"
//var pattern  =/lo.w/
var pattern  =/\w/

//var pattern  =/[^low]/
//var pattern  =/[a-z]|[0-9]/
//var pattern = /l[xtl]/
//var pattern = /low/gim
//console.log(str.match(pattern))
console.log(pattern.test(str))