var employee = {
    name : "hemanth",
    address : "andhra",
    company : {
        name : "wipro",
        address:{
            place : "hitech city",
            state : "hyderabad"
        }
    },
    iswfh : true,
    technologies : ["full stack","devops","java"]

}
console.log(employee.company.address.state)