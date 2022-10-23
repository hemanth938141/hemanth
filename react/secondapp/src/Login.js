import {useNavigate} from 'react-router'
import Apply from './Apply';


function Login(){
    var nav= useNavigate();
    return (
        <div>
           <button onClick={()=>{

                    nav("./Apply")             
                    }}></button>

        </div>
    )
}
export default Login