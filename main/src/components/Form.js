import React,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid";

const Form = ({input,setInput,items,setItems,editItem,setEditItem}) => {
    const updateItem = (title, id, completed) => {
        const newItem = items.map((item) => 
            item.id === id ? {title, id, completed} : item

    )
        setItems(newItem);
        setEditItem("");
    }
    useEffect(()=>{
        if(editItem){
            setInput(editItem.title);
        }else{
            setInput("")
        }
    },[setInput,editItem])
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editItem){
            setItems([...items, {id :uuidv4(),title: input, completed: false }]);
            setInput("");
        } else{
            updateItem(input,editItem.id,editItem.completed)
        }
        
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a Item ..." className="task-input" value={input} required onChange={onInputChange} />
            <button className="button-add" type="submit">
                {editItem ? "OK" : "Add"}
            </button>
        </form>
    );
};

export default Form;