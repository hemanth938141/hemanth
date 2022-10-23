import {Link,Routes,Route} from "react"
import Home from "./Home"
import Dash from "./Dash"
import Login from "./Login"
import Apply from "./Apply"
function Nav(){


    return <div>

        <Link to ="./Home">Home</Link><br></br>
        <Link to = "./Login">LOgin</Link><br></br>
        <Link to ="./Dash">Dashboard</Link><br></br>

        <Routes>
            <Route path="./Home" element ={<Home></Home>}></Route>
            <Route path="./Login" element ={<Login></Login>}></Route>
            <Route path="./Dash" element ={<Dash></Dash>}></Route>
            <Route path="./Apply" element ={<Apply></Apply>}></Route>
        </Routes>

    </div>
}
export default Nav