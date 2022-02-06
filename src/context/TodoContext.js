import React,{createContext,useState,useEffect} from 'react';

export const TodoContext = createContext()

const TodoContextProvider = ({children}) =>{
    //states
    const [todos,setTodos] = useState([
       //
    ])

    //lay ra
    useEffect(()=>{
        console.log('getting todos');
        const todos = localStorage.getItem('todos')
        if(todos) setTodos(JSON.parse(todos))   

    },[])

    //luu 
    useEffect(()=>{
        console.log('saving todos');
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])



    const addTodo = (todo) =>{
        setTodos([...todos,todo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //data
    const todoContextData = {
        todos:todos,
        addTodo:addTodo,
        deleteTodo:deleteTodo
    }

    return(
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider