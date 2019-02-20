import * as React from 'react';
interface Props{
}
interface State{
    counter:number;
}

class Counter extends React.Component<Props,State>{
    state:State={counter:0};
    onIncreasement=():void=>{
        this.setState(({counter})=>({counter: counter+1}));
    }
    onDecreasement=():void=>{
        this.setState(({counter})=>({counter:counter-1}));
    }
    render(){
        return(
            <div>
                <h1> counter </h1>
                <h3>{this.state.counter}</h3>
                <button onClick={this.onIncreasement} > + </button>
                <button onClick={this.onDecreasement} > - </button>
            </div>
        );
    }
}
export default Counter;
