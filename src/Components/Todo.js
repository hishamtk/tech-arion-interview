import React , {useEffect, useState} from 'react'
import axios from 'axios'


const Todo = () => {

    const [todos,setTodos] = useState(null)

 useEffect(()=>{
     getTodo()
 },[])


    const getTodo = async() =>{

        try {

            const response = await axios.get('https://gorest.co.in/public/v1/todos')

            setTodos(response.data.data)

            console.log(response.data.data)
            
        } catch (error) {

            console.error(error)
            
        }

    }






    return (
        <div className="grid-container">

            {todos && todos.map(todo =>(
                <div key={todo.id} className="grid-item">
                    <p><span className="todo-span">Title:</span>{todo.title}</p>
                    <p><span className="todo-span">Status:</span>{todo.status}</p>
                    <p><span className="todo-span">Due: </span>{ (new Date(todo.due_on)).toLocaleDateString() }</p>


                </div>
            ))}
           
            
        </div>
    )
}

export default Todo
