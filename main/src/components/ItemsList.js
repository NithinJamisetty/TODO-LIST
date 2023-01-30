import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ItemsList = ({items, setItems, setEditItem}) => {
    const handleComplete = (itemz) => {
        setItems(
            items.map((item) =>{
                if(item.id === itemz.id) {
                    return {   ...itemz, completed: !itemz.completed}
                }
                return item;

            })
        )
    }
    const handleEdit = ({id}) =>{
        const findItem = items.find((item) => item.id === id)
        setEditItem(findItem)

    }
    const handleDelete = ({id}) => {
        setItems(items.filter((item) => item.id !== id))
    }
    return (
        <div>
            {items.map((item) => (
                <li className="list-item" key={item.id}>
                    <input 
                    type="text"
                     value={item.title} 
                     className={`list ${item.completed ? "complete": ""}`} 
                     onChange={(event) => event.preventDefault()} />
                     <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(item)}>
                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(item)}>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button>
                        <button className="button-delete task-button"  onClick={() => handleDelete(item)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                     </div>


                </li>

            )

            )}
        </div>
    )
}
export default ItemsList;