import React from 'react';
import Chatroom from './chatroom'
import SearchBar from './searchbar'
export default class ExploreBox extends React.Component{
    render(){
        return(
            <div className="explore-container" style={{
                width:"95%",
                top:"10%",
                height:"100vh",
                background:"#E6E6E6",
                padding:10,
            }}>
                <div className="search-bar" style={{
                    position:"relative",
                    width:"95%", 
                    height:"5%",
                }}>
                <div className="searchbarbox" style={{marginTop:30}}>
                <SearchBar />
                </div> 
                </div>
                <div className="room-container"style={{
                    top:20,
                    width:"95%",
                    height:"95%",
                    overflow:"scroll" 
                }}>
                <Chatroom />
                <Chatroom />
                <Chatroom />
                <Chatroom />
                <Chatroom />
                <Chatroom />
                <Chatroom />
                <Chatroom />
                <Chatroom />
                </div>
            </div>
        )
    }
}
