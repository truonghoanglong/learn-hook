import React,{useState,useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {ThemeContext} from '../context/ThemeContext'
const TodoForm = (props) => {
    const {addTodo} = props;

    const [title,setTitle] = useState('')


    const handleOnchange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo({
            id:uuidv4(),
            title
        })
        setTitle('')
    }
    
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme ? light : dark

    return ( 
        <form onSubmit={handleSubmit} style={style}> 
            <input type="text"
            name="title"
            onChange={handleOnchange}
            value={title}
            required
            />
            <input type="submit" value="ADD" style={style} />
        </form>
     );
}
 
export default TodoForm;