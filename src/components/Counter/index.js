import { Link } from "react-router-dom";
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/features/counter/counterSlice";
import { addTodo } from "../../store/features/todo/todoSlice";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({});
  const [otherState, setOtherState] = useState(false);
  const { value } = useSelector((store) => store.counter)
  const {todos} = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  const handleinputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleincrement = () => {
    dispatch(increment())
  }

  const handledecrement = () => {
    dispatch(decrement())
  }

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addTodo(formData))
  };

  return (
    <div className="container mt-5">
      <h3 className="display-4"><b>Count: {value}</b></h3>
      <button className="btn btn-primary mr-2" onClick={(e) => handleincrement(e)}><b>Increment</b></button>
      <button className="btn btn-primary mr-2" onClick={(e) => handledecrement(e)}><b>Decrement</b></button>
      <hr />
      <div>
        <div>
          <input name="fname" onChange={(e) => handleinputChange(e)} placeholder="First Name" />
          <input name="lname" onChange={(e) => handleinputChange(e)} placeholder="Last Name" />
          <input name="haddle" onChange={(e) => handleinputChange(e)} placeholder="Haddle" />
          <button onClick={(e) => handleAdd(e)}>Add</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {
              todos && todos.map((el, ind) => (
                <tr key={ind}>
                  <th scope="row">{ind + 1}</th>
                  <td>{el.fname}</td>
                  <td>{el.lname}</td>
                  <td>{el.haddle}</td>
                </tr>
              
              ))
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Counter;
