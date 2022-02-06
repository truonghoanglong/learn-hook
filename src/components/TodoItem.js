import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
const TodoItem = (props) => {
    const {todo,deleteTodo} = props;
    //Themcontext
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme ? light : dark

    //todocontext is
    
    return (
        <div className="" style={style}>
            <li key={todo.id} onClick={(id)=>deleteTodo(todo.id)}>{todo.title}</li>
        </div>
    );
}
 
export default TodoItem;