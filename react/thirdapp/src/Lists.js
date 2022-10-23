function Lists(){
    var n  = [{

        name:"hemanth",
        id:101


    },
    {

        name:"karun",
        id:102


    },
    {

        name:"toni",
        id:103


    }]
    const notifications =()=>{
      const a=  n.map((msg)=>{
           return <li key={msg.id}>{msg.id}:{msg.name}</li> 
        })
        return a;
    }
    return (
        <div>
                <ul>
                {notifications()}
                </ul>
        </div>
    )
}
export default Lists;