import React, { ChangeEvent } from 'react';
import fire from '../components/fire'
class Renderer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }
    showRegisterBox = () => {
        this.setState({ isLoginOpen: false, isRegisterOpen: true });
    }

    showLoginBox = () => {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }
    render() {
        return (
            <div className="root-container">
                <h1>welcome</h1>
                <div className="box-controller">
                    <div className={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox}>
                        Login
                    </div>
                    <div className={"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox}>
                        Register
                    </div>
                </div>
                <div className="box-controller">
                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}
                </div>
            </div>
        )
    }
}

class RegisterBox extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { username: '', email: '', password: '', noerrors: [true, true, true] };//true 는 에러 없음 false 는 에러 있음
    }
    submitRegister = (e: React.MouseEvent<HTMLElement>) => {
        this.errorState();
        console.log("you submit registeration");

    }
    addinfo = (e: any) => {
        e.preventDefault();
        const db = fire.database().ref("login")
        const infoRef = {
            id: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        db.push(infoRef);
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    };
    errorState = () => {
        console.log(this.state.username);
        let b = []
        this.state.username != ("") ? b[0] = true : b[0] = false
        this.state.email != ("") ? b[1] = true : b[1] = false
        this.state.password != ("") ? b[2] = true : b[2] = false
        for (let i = 0; i < 3; i++) {
            this.state.noerrors[i] = b[i];
        }
    }
    onElementChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        this.setState({ [e.target.name]: e.target.value })
        //this.errorState();//이렇게 해도 스테이트가 바뀐걸 바로 못받아들인다! 그래서 시간차이가 생겨버린다.
        console.log(this.state.username)
        console.log("input value changed");
    }

    render() {
        //console.log("render start!")
        return (
            <div className="inner-container">
                {this.errorState()}
                <div className="box">
                    <form onSubmit={this.addinfo}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" onChange={this.onElementChange} className="register-input" placeholder="Username" value={this.state.username}></input>
                            <small className="error">{this.state.noerrors[0] ? "" : "username cannot be empty"}</small>
                        </div>
                        <div className="input-group">
                            <label htmlFor="username">Useremail</label>
                            <input type="text" name="email" onChange={this.onElementChange} className="register-input" placeholder="E-mail" value={this.state.email}></input>
                            <small className="error">{this.state.noerrors[1] ? "" : "useremail cannot be empty"}</small>
                        </div>
                        <div className="input-group">
                            <label htmlFor="username">Password</label>
                            <input type="password" name="password" onChange={this.onElementChange} className="register-input" placeholder="Password" value={this.state.password}></input>
                            <small className="error">{this.state.noerrors[2] ? "" : "password cannot be empty"}</small>
                        </div>
                        <button type="submit" className="Register-btn" onClick={this.submitRegister.bind(this)}>Register</button>
                    </form>
                </div>
                {console.log(this.state.noerrors)}

            </div>
        )
    }
}

class LoginBox extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
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
