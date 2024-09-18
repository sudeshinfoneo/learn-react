import { useEffect, useState } from "react";

const Todos = (props) => {

    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
            setTodos(data)
        })
    }, [])
   

    return (
        <>
            <div id="myDIV">
                {
                    todos && todos.map((el, index) => (
                        <>                        
                            <h5 key={index}>My To Do List {el.title} </h5>
                            {el.completed ? (<p style={{ color: 'green' }}>Completed</p>) : (<p style={{ color: 'red' }}>Not Completed</p>)}
                        </>
                    ))
                }
            </div>


        </>
    )
}
export default Todos;

