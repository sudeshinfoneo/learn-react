// import { useEffect, useState } from "react";

// const Todos = (props) => {

//     const [todos, setTodos] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
//             setTodos(data)
//         })
//     }, [])

//     return (
//         <>
//             <div id="myDIV">
//                 {
//                     todos && todos.map((el, index) => (
//                         <>                        
//                             <h5 key={index}>My To Do List {el.title} </h5>
//                             {el.completed ? (<p style={{ color: 'green' }}>Completed</p>) : (<p style={{ color: 'red' }}>Not Completed</p>)}
//                         </>
//                     ))
//                 }
//             </div>


//         </>
//     )
// }
// export default Todos;


import { useState, useEffect } from "react";

const Todos = (props) => {
  const [todos, setTodos] = useState('')

  useEffect(() => {
 
    const storedTodos = localStorage.getItem('todos');

    if (storedTodos) {
  
      let list = JSON.parse(storedTodos);
      let updatedList = list.map(item => ({
        ...item,
        title: 'New Title' 
      }));
      setTodos(updatedList);
      localStorage.setItem('todos', JSON.stringify(updatedList));
    } else {
 
      const defaultTodos = [
        { id: 1, title: 'List1', completed: false },
        { id: 2, title: 'List2', completed: false },
        { id: 3, title: 'Final List', completed: true }
      ];
      setTodos(defaultTodos);
      localStorage.setItem('todos', JSON.stringify(defaultTodos));
    }
  }, []);
  console.log("todos",todos)

  return (
    <>
      <div id="myDIV">
        {
          todos && todos.map((el, index) => (
            <>
              <div key={el.id}>
                <h5>My To Do List: {el.title}</h5>
                {el.completed ? (
              <p style={{ color: 'green' }}>Completed</p>
            ) : (
              <p style={{ color: 'red' }}>Not Completed</p>
            )}                
              </div>
              </>
          ))
        }
      </div>
    </>
  )
}
export default Todos;
