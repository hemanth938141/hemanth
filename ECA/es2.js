class emp3{
    eid;
    ename;
    // getdetails(){
    //     return this.eid+" "+this.ename;
    // }
}

class emp extends emp3{
    getdetails(){
        return this.eid+" "+this.ename;
    }
}
var emp1 = new emp();
emp1.eid=1;
emp1.ename="toni"
console.log(emp1)
var emp2 = new emp();
emp2.eid=2;
emp2.ename="karun"
console.log(emp2)