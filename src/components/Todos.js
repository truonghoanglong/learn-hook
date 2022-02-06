import React,{useState,useContext} from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
const Todos = () => {
    const {todos,deleteTodo,addTodo} = useContext(TodoContext)


    return (
        <div className="todo-list" >
            <TodoForm  addTodo={addTodo}/>
            <ul>
            {
                todos.map(todo =>(
                    <TodoItem key={todo.id}  todo={todo} deleteTodo={deleteTodo}/>
                ))
            }
            </ul>
        </div>
    );
}
 
export default Todos;