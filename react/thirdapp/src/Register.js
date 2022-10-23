
import {useState} from 'react'


function Register(){

 const [f,setF]= useState({
    username :'',
    password:'',
    email : ''

})

const update = (event)=>{
    console.log(event.target.name)
    const name =event.target.name
    console.log( {...f,   [name] : event.target.value})
    setF({
          ...f,   [name] : event.target.value
    })
}

   return (
    <div>
        <form>
            enter useranme: <input onChange={update} type = "username" name = "username"></input>
            enter password: <input  onChange={update} type = "password" name = "password"></input>
            enter mail: <input onChange={update} type = "email" name = "mail"></input>
            <button>register</button>

        </form>
    </div>
   )

}
export default Register