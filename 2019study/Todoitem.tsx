import * as React from 'react';

interface Props{
    text:string;
    done:boolean;
    onToggle():void;
    onRemove():void;
}

const Todoitem:React.FunctionComponent<Props> = ({text,done,onToggle,onRemove})=>(
                <li>
                    <b onClick={onToggle} style={{textDecoration: done ? 'line-through':'none',}}>{text}</b>
                    <span style={{marginLeft:'0.5rem'}} onClick ={onRemove}>[Delete]</span>
                </li>
                
        );

export default Todoitem;
