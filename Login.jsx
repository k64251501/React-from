import React from "react"
class Login extends React.Component{
    state ={
        email:"",
        password:""
    }
    eamilHandler = (event)=> {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      this.setState({eamil: event.target.value})
    }
    passwordHandler = (event) =>{
       console.log(event);
       console.log(event.target);
       this.setState({possowr:event.target.value});
    }
    submitHandler= (event)=>{
      event.preventDefault()
      console.log(this.state);
    }
    render (){
        return <div>
            <h1>LOGIN FROM</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <from onSubmit={this.submitHandler}>
            <label>EMAIL</label>
            <input type="text" onChange={this.eamilHandler}></input>
            <br></br>
            <br></br>
             <label>PASSWORD</label>
             <input type="text" onChange={this.passwordHandler}></input>
             <br></br>
             <br></br>
             <input type="submit" value="login"></input>
             </from>
        </div>
    }
}
export default Login