import React from 'react';
import ExploreBox from './exploreBox'

export default class Explore extends React.Component<any,any>{
    constructor(props: any) {
        super(props);
    }
    render(){
        return(
            <div className="whole-container"
            style={{
                height:"100%",
                background:"#ddd"
            }} >
                whole container
                <div className="exploreBox" style={{
                    position:"relative",float:"left", width:"40%"}}>
                    <ExploreBox />
                </div>
                <div className="chattingBox" style={{
                    position:"relative",backgroundColor:"red",float:"left",
                    width:"60%",height:"100%"
                    }}>
                    chatting area
                </div>
            </div>
        )
    }
}
