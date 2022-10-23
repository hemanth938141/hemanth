function Users(props){

    var users =["one","two","therr"];
    props.fn(users)

    // const renderlist= ()=>{
    //    var x = props.use.map((user)=>{
    //         return <li>{user}</li>
    //     })
    //     return x;
    // }
    return(
        <div>
            
        {/* {props.use.length} */}
        {/* <ul>{renderlist()}</ul> */}
            
        </div>
    )
}
export default Users