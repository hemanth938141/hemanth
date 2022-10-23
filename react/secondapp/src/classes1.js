import React from "react";

class classes1 extends React.Component{

constructor(){

    super();
    this.state={
        count : 0
    }
}
change =()=>{

    this.setState({
        count : this.state.count+1
    })

}

componentDidMount(){
    console.log("mounted")
}
render(){
    console.log("render")
return (
    
<div>

    <h1>i am component</h1>
    <h1 onClick={this.change}>
        {this.state.count}
    </h1>
   
</div>

)

}
componentDidUpdate(){
    console.log("updtaed")
}
componentWillUnmount(){
    console.log("unmounted")
}


}
export default classes1 