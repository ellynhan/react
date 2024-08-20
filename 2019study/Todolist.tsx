import * as React from 'react';
import Todoitem from './Todoitem';
import { on } from 'cluster';

interface Props{

}

interface Tododata{
    id :number;
    text:string;
    done:boolean;
}

interface State{
    Todoitems :Tododata[];  
    input:string;
}

class Todolist extends React.Component <Props,State>{
    id: number=0;
    state:State={
        Todoitems:[],
        input:''
    };
    onToggle=(id:number):void=>{
        const {Todoitems} = this.state;
        const index =Todoitems.findIndex(todo => todo.id===id);
        const selectedItem = Todoitems[index];
        const nextItems=[...Todoitems];

        const nextItem={
            ...selectedItem,
            done:!selectedItem.done,
        };

        nextItems[index] = nextItem;

        this.setState({Todoitems:nextItems});
    }

    onRemove=(id: number):void=>{
        this.setState(
            ({Todoitems})=>({
                Todoitems:Todoitems.filter(todo=>todo.id!==id)})
        );
    }

    onChange=(e:React.FormEvent<HTMLInputElement>):void=>{
        const {value} = e.currentTarget;
        this.setState({input:value});
    }
    onSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        this.setState(({Todoitems,input})=>({
            input:'',
            Todoitems:Todoitems.concat({
                id:this.id++,
                text:input,
                done:false
            })
        }));
    }

    render(){
        const{ onSubmit,onChange,onToggle,onRemove}=this;
        const{ input, Todoitems} =this.state;

        const todoItemList = Todoitems.map(
            todo=>(<Todoitem
                    key={todo.id}
                    done = {todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=>onRemove(todo.id)}
                    text={todo.text} />
                    )
        );

        return(
            <div>
                <h1>TODO</h1>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={input} />
                    <button type="submit">ADD</button>
                </form>
                <ul>
                    {todoItemList}
                </ul>
            </div>
        );
    }
}

export default Todolist;
