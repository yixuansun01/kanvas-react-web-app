import React, { useState,useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

interface TodoItem {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
}
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState<any>(null);

  // const API = "http://localhost:4000/a5/todos";
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState<TodoItem>({
    id: 1,
    title: "NodeJS Assignment",
    description: "description for a to do item",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: { id: any; }) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  // const deleteTodo = async (todo: { id: number; }) => {
  //   const response = await axios.delete(`${API}/${todo.id}`);
  //   setTodos(todos.filter((t) => t.id !== todo.id));
  // };

  const deleteTodo = async (todo: any) => { // Adjust the type for `todo`
    try {
      await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) { // Consider using a more specific type or type guard
      console.log(error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  // const updateTodo = async () => {
  //   const response = await axios.put(`${API}/${todo.id}`, todo);
  //   setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  // };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? response.data : t)));
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred while updating the todo.");
        }
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };
  


  useEffect(() => {
    fetchTodos();
  }, []);
 
    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary"
        href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
          <input value={todo.id}
            onChange={(e) => setTodo({ ...todo,
              id: Number(e.target.value) })}/>
          <a className="btn btn-primary"
          href={`${API}/${todo.id}`}>
            Get Todo by ID
          </a>
          <h3>Filtering Array Items</h3>
          <a className="btn btn-primary"
          href={`${API}?completed=true`}>
            Get Completed Todos
          </a>
          <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary"
            href={`${API}/create`}>
              Create Todo
            </a>
          <h3>Deleting from an Array</h3>
            <a className="btn btn-primary"
            href={`${API}/${todo.id}/delete`}>
              Delete Todo with ID = {todo.id}
            </a>
            <h2>Working with Arrays</h2>
              <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                  ...todo, id: Number(e.target.value) })}/>
               <br/>   
              <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                  ...todo, title: e.target.value })}/>
              <h3>Updating an Item in an Array</h3>
              <a className="btn btn-primary"
              href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
              </a>
              <br/>
              <h4>3.3.7 Edit completed and description</h4>
              <h5>ID</h5>
              <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                  ...todo, id: Number(e.target.value) })}/>
               <br/>   
              <input 
              type="checkbox" 
              onChange={(e) => setTodo({ ...todo, 
                completed: e.target.checked })}
              checked={todo.completed}/>
              <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Update edit Completed property
              </a>
              <br/>
              <input type="text" value={todo.description}
                onChange={(e) => setTodo({
                  ...todo, description: e.target.value })}/>
              <a href={`${API}/${todo.id}/description/${todo.description}`} >
                Update description 
              </a>
              <br/>
              <h3>lab part 3.4 and 3.5 are together</h3>
              <br/>
            <h5>ID</h5>
              <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                  ...todo, id: Number(e.target.value) })}/>
               <br/> 
            <h5>title</h5>  
              <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                  ...todo, title: e.target.value })}/> 
              <h5>description</h5>
              <textarea value={todo.description} 
                onChange={(e) => setTodo({ ...todo,
                  description: e.target.value })} />
              <br/>
              
              <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                  ...todo, due: e.target.value })} />
              <br/>
              <label>
                <input  type="checkbox"   checked={todo.completed}
                  onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })} />
                Completed
               </label>
              <br/>
              <button onClick={postTodo}> Post Todo </button>
              <br/>
              <button onClick={updateTodo}>
                Update Todo
              </button>

              {/* <h5>LAB-3.4.5& 3.4.6 &3.4.7 &3.4.8</h5> */}      
      <br/>
      <button className="btn btn-primary"
      onClick={createTodo} >
        Create Todo
      </button>
      <br/>
      <button className="btn btn-success"
       onClick={updateTitle} >
        Update Title
        </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
             <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button 
            style={{ backgroundColor: 'yellow', color: 'black' }}
            onClick={() => fetchTodoById(todo.id)} >
            Edit
          </button>
            <button className="btn btn-danger"
            onClick={() => removeTodo(todo)}  >
              Remove
            </button>
            <button onClick={() => deleteTodo(todo)}
              className="btn btn-danger ms-2">
              Delete
            </button>

            <br/>
            <br/>
          </li>
        ))}
      </ul>
     
             
      <br/>
      <br/>
      
      
      </div>
    );
  }
  export default WorkingWithArrays;