import React  from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            userInfo:{
                login: "default"
            } 
        }
        
    }
   async  componentDidMount(){
        const data = await fetch("https://api.github.com/users/dhruv77chaudhary");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
    }

    render(){
      return(
        <div className="User-card  m-4 p-4 bg-slate-100 border border-solid border-black w-[200px]">
        <img className="photo" src="https://th.bing.com/th/id/OIP.V9BpW-wcVzSe9T_W7r17hwHaE9?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
        <h1 className="px-2 mx-2">{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count +1
            })
        }}>Counter</button>
        
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Faridabad</h3>
        <h3>login :{this.state.userInfo.login}</h3>
        <h4>Contact: dhruv@Gmail.com</h4>
        </div>
      )
    }
}
export default UserClass;