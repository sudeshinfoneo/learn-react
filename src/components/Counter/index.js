import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/features/counter/counterSlice";
import { addTodo, editTodo, removeTodo } from "../../store/features/todo/todoSlice";
import { v4 as uuidv4 } from 'uuid';
import { validateJson } from 'infoneo-input-validator';

const Counter = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();
  const { value } = useSelector((store) => store.counter);
  const { todos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleinputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = 'First Name is Required';
    if (!formData.lname) newErrors.lname = 'Last Name is Required';
    if (!formData.handle) newErrors.handle = 'Handle is Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleincrement = () => {
    dispatch(increment())
  }

  const handledecrement = () => {
    dispatch(decrement())
  }

  const handleAddorUpdate = (e) => {
    e.preventDefault();

    const rule = {
      fname: [
        { type: 'required', message: 'First name is required' },
        { type: 'minLength', value: 3, message: 'First name must be at least 3 characters' },
        { type: 'maxLength', value: 10, message: 'First name cannot exceed 10 characters' },
        { type: 'pattern', value: /^[a-zA-Z]+$/, message: 'First name can only contain letters' },
      ],
      lname: [
        { type: 'required', message: 'Last Name is required' },
        { type: 'minLength', value: 3, message: 'Last Name must be at least 3 characters' },
        { type: 'maxLength', value: 10, message: 'Last Name cannot exceed 10 characters' },
        { type: 'pattern', value: /^[a-zA-Z]+$/, message: 'Last Name can only contain letters' },
      ],
      handle: [
        { type: 'required', message: 'Handle is required' },
      ],
    }

    const validate = validateJson(formData, rule);

    setErrors(validate.errors);
    if (!validate.isValid) {
      return
    }

    if (isEditing) {
      dispatch(editTodo({
        id: editId,
        data: { ...formData }
      }));
      setIsEditing(false);
      setEditId(null)
    } else {
      dispatch(addTodo({
        ...formData,
        id: uuidv4()
      }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  };

  const handleEdit = (id) => {
    const user = todos.find(todo => todo.id === id);
    if (user) {
      setFormData({
        fname: user.fname,
        lname: user.lname,
        handle: user.handle
      });
      setIsEditing(true);
      setEditId(id);
    }
  }

  return (
    <div className="container mt-5">
      <h3 className="display-4 mb-4 text-center"><b>Count: {value}</b></h3>
      <div className="text-center mb-4">
        <button className="btn btn-primary mr-2" onClick={(e) => handleincrement(e)}><b>Increment</b></button>
        <button className="btn btn-secondary " onClick={(e) => handledecrement(e)}><b>Decrement</b></button>
      </div>
      <hr />
      
      <div>
        <div className='mb-4'>
          <form onSubmit={handleAddorUpdate}>
            <div className="form-group">
              <h3>Add User</h3>
              <div className="d-flex align-items-center">
                <input
                  name="fname"
                  value={formData.fname || ''}
                  className={`form-control mb-2 mr-2 ${errors.fname ? 'is valid' : ''}`}
                  onChange={(e) => handleinputChange(e)}
                  placeholder="First Name" />
                  {errors.fname && <span className="text-danger">{errors.fname}</span>}
                <input
                  name="lname"
                  value={formData.lname || ''}
                  className={`form-control mb-2 mr-2 ${errors.lname ? 'is valid' : ''}`}
                  onChange={(e) => handleinputChange(e)}
                  placeholder="Last Name" />
                  {errors.lname && <span className="text-danger">{errors.lname}</span>}
                <input
                  name="handle"
                  value={formData.handle || ''}
                  className={`form-control mb-2 mr-2 ${errors.handle ? 'is valid' : ''}`}
                  onChange={(e) => handleinputChange(e)}
                  placeholder="Handle Use" />
                  {errors.handle && <span className="text-danger">{errors.handle}</span>}
                <button type="submit" className="btn btn-success mb-2">{isEditing ? 'Update' : 'Add'}</button>
              </div>
            </div>
          </form>
        </div>
        <hr />

        <h3>List of User Details</h3>
        <table class="table table-sm table-bordered">
          <thead className='thead-dark text-center'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Handle Use</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              todos && todos.map((el, ind) => (
                <tr className='text-center table-bordered' key={ind}>
                  <th scope="row" >{ind + 1}</th>
                  <td>{el.fname}</td>
                  <td>{el.lname}</td>
                  <td>{el.handle}</td>
                  <td>
                    <button className="btn btn-warning btn-sm mr-2" onClick={(e) => handleEdit(el.id)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={(e) => handleDelete(el.id)}>Delete</button>
                  </td>
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
