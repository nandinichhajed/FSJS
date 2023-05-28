import { useState } from "react";
import InputArea from "../input-area/input-area.component";
import ListItem from "../list-item/list-item.component";
import "./to-do-style.css"

const ToDo = () => {
    const [toDoList, setToDoList] = useState([]);

    function handleAddItem(itemToAdd) {
        setToDoList((prevList) => {
            return [...prevList, itemToAdd];
        });

        console.log(toDoList);
    }

    function handleDeleteItem(itemToDelete) {
        const newArr = toDoList.filter((list) => {
            return list.id !== itemToDelete.id;
        });

        setToDoList(newArr);
    }

    function handleEditItem(itemToEdit, newValue) {
        const newArr = toDoList.map((list) => {
            return list.id === itemToEdit.id
                ? { ...itemToEdit, todo: newValue }
                : list;
        });

        setToDoList(newArr);
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea addItem={handleAddItem} />

            {toDoList.map((list) => (
                <ListItem
                    key={list.id}
                    list={list}
                    deleteItem={handleDeleteItem}
                    editItem={handleEditItem}
                />
            ))}
        </div>
    );
};

export default ToDo;
