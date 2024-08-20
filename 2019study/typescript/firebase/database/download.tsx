import React from 'react';
import firebase from './fire';

let URR : any;
let trans:string;
let control : boolean;
interface userInfo{
    T:string,
    M:string,
};

interface Props{

}

interface State{
    users: userInfo[];
};

class Users extends React.Component<Props,State>{
    constructor(props:any){
        super(props);
        
    }
    state:State={
        users:[],
        
    }
    componentDidMount(){

    
        const usersRef = firebase.database().ref("chatroom");
        usersRef.once('value',(snapshot)=>{
            let users = snapshot.val();
            let newState:any=[];

        for(let user in users){
            newState.push({
                T:users[user].title,
                M:users[user].lastMessage

            });
        }
        this.setState({
            users: newState
        });
    });
    }
    render(){
        return(
            <div>
            <section>
            <div>
                <ul>
                    {this.state.users.map((user)=>{
                        return(
                            <li>
                                <h2>{user.T}</h2>
                                <p>{user.M}</p>
                            </li>
                        )
                    })}
                </ul>

            </div>
            </section>
            </div>
        );
    }
}

export default Users;
