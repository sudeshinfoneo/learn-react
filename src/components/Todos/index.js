import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                            <input type="text" id="myInput" placeholder="Title..." />
                        </>
                    ))
                }
            </div>

            <ul id="myUL">
                <li className="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs </li>
                <li>Read a book</li>
                <li>Organize office</li>


            </ul>
        </>
    )
}
export default Todos;