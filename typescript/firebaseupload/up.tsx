import React from 'react';
import fire from './fire';

interface chat{
    title:string;
    lastMessage:string;
}

class Chat extends React.Component<chat>{
    state:chat={
        title:'',
        lastMessage:''
    };

updateInput=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    event.persist();
    this.setState({
        [event.target.name]:event.target.value
    });
    }
    addchat=(e:any)=>{
        e.preventDefault();
        const db=fire.database().ref("chatroom")

        const chatRef={
            title:this.state.title,
            lastMessage:this.state.lastMessage
        }
        db.push(chatRef);
        this.setState({
            title:'',
            lastMessage:'',
        })
    };
    render(){
        return(
            <div>
                <form onSubmit={this.addchat}>
                <br />
                title: <input type="text" name="title" onChange={this.updateInput} value={this.state.title} ></input>
                <br />
                lastMessage: <input type="text" name="lastMessage" onChange={this.updateInput} value={this.state.lastMessage} ></input>
                <br />
                <button type="submit">input test</button>
                </form>
            </div>
        )
    }
}
export default Chat;
