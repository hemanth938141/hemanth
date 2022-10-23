import {useState} from 'react'

function Form(){


   const [s,setS] = useState({

    user : ''

    });
    
    const updated =(event)=>{
        const p =event.target.value;
        setS({user:p})
    }

    const log =(event)=>{
        event.preventDefault();
        console.log("state",s)

    }
return (
        <form>

              enter username:  <input onChange={updated} type = "text"name ="user"></input>
              <button onClick={log}>login</button>
        </form>
     


    )
}
export default Form;

