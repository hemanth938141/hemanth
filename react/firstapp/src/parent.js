
import Child from "./child"


function Parent(){
    var obj ={
        name : "hemanth",
        company:"tcs",
        address:{
            place:"hyd",
            city:"hitechcity"

        
        }
    }
    return (
      <div>
        <h1>{obj.address.city}</h1>
        <h1>{obj.address.place}</h1>
        <Child></Child>
      </div>
    )
  }
  
  export default Parent