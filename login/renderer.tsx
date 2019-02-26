import React, { ChangeEvent } from 'react';

class Renderer extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }
    showRegisterBox=()=> {
        this.setState({ isLoginOpen: false, isRegisterOpen: true });
    }

    showLoginBox=()=> {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }
    render() {
        return (
            <div className="root-container">
                <h1>welcome</h1>
                <div className="box-controller">
                    <div className={"controller"+(this.state.isLoginOpen ? "selected-controller":"")} onClick={this.showLoginBox}>
                        Login
                    </div>
                    <div className={"controller"+(this.state.isRegisterOpen ? "selected-controller":"")} onClick={this.showRegisterBox}>
                        Register
                    </div>
                </div>
                <div className="box-controller">
                    {this.state.isLoginOpen&&<LoginBox />}
                    {this.state.isRegisterOpen&&<RegisterBox />}
                </div>
            </div>
        )
    }
}

class RegisterBox extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = { username:"",email:"",password:"", noerrors:[true,true,true] };
    }
    //true 는 에러 없음 false 는 에러 있음
    submitRegister=(e: React.MouseEvent<HTMLElement>)=>{
        if(this.state.username==""){
            this.state.noerrors[0]=false;
        } 
        if(this.state.email==""){
            this.state.noerrors[1]=false;
        } 
        if(this.state.password==""){
            this.state.noerrors[2]=false;
        }
        console.log("you submit registeration");
        return e;
    }
    clearErr=()=>{
        if(this.state.username!=""){
            this.state.noerrors[0]=true;
        } 
        if(this.state.email!=""){
            this.state.noerrors[1]=true;
        } 
        if(this.state.password!=""){
            this.state.noerrors[2]=true;
        }
    }
    onElementChange=(e:ChangeEvent<HTMLInputElement>)=>{
        e.persist();
        this.clearErr();
        this.setState({[e.target.name]: e.target.value})
        console.log("input value changed");
    }
    
    render() {
        
        console.log(this.state.errors)
        return (
            <div className="inner-container">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.onElementChange} className="register-input" placeholder="Username"></input>
                        <small className="error">{this.state.noerrors[0]?"true?":"username cannot be empty"}</small>
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Useremail</label>
                        <input type="text" name="email" onChange={this.onElementChange} className="register-input" placeholder="E-mail"></input>
                        <small className="error">{this.state.noerrors[1]?"":"useremail cannot be empty"}</small>
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Password</label>
                        <input type="password" name="password" onChange={this.onElementChange} className="register-input" placeholder="Password"></input>
                        <small className="error">{this.state.noerrors[2]?"":"password cannot be empty"}</small>
                    </div>
                    <button type="button" className="Register-btn" onClick={this.submitRegister.bind(this)}>Register</button>

                </div>

            </div>
        )
    }
}

class LoginBox extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {  };
    }

    submitLogin(e: React.MouseEvent<HTMLElement>) {
        console.log(e);
        return e;
    }
    render() {
        return (
            <div className="inner-container">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"></input>
                    </div>
                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>

                </div>
            </div>
        )

    }
}


export default Renderer;
