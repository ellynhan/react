import React from 'react';
import group from '../components/group.png'
export default class Chatroom extends React.Component {
    render() {
        return (
            <div className="room" style={{ position: "relative", marginTop: "3%", width: "100%", height: "10%" }}>
                <div className="profile" style={{
                    position: "relative",
                    float: "left",
                    width: "20%",
                    height: "100%",
                    background: "#A4A4A4",
                }}>
                    <img src={group} width="100%" height="100%"/>
                </div>
                <div className="room-center" style={{
                    float: "left",
                    position: "relative",
                    width: "60%",
                    height: "100%",
                    background: "#FFFFFF"
                }}>
                    <div className="title" style={{
                        position: "relative",
                        height: "40%"
                    }}>
                        <div className="title-innerbox" style={{
                            padding: 8
                        }}>
                            default title
                    </div>
                    </div>
                    <div className="lastMessage" style={{
                        position: "relative",
                        height: "60%"
                    }}>
                        <div className="message-innerbox" style={{
                            padding: 8
                        }}>
                            last message..
                    </div>
                    </div>
                </div>
                <div className="percentage" style={{
                    position: "relative",
                    float: "left",
                    width: "20%",
                    height: "100%",
                    background: "#0B0B61"
                }}>
                    percentage
            </div>
            </div>
        )
    }
}
