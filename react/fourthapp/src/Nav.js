import {Link,Routes,Route} from "react"
import Login from "../../secondapp/src/Login"
imp
function nav(){


    return <div>

        <Link to ="./Home"></Link>
        <Link to = "./Login"></Link>
        <Link to ="./Dash"></Link>

        <Routes>
            <Route path="./Home" element ={<Home></Home>}></Route>
            <Route path="./Login" element ={<Login></Login>}></Route>
            <Route path="./Dash" element ={<Dash></Dash>}></Route>
            <Route path="./Apply" element ={<Apply></Apply>}></Route>
        </Routes>

    </div>
}
export default nav