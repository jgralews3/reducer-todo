import React, { useState, useReducer } from 'react';
import './App.css';
import {taskReducer, initialState} from "./reducers/reducer";

function App() {
  const [newTask, setNewTask] = useState({item: "", completed: false, id: Date.now()})

  const changeHandler = e => {
    setNewTask({...newTask, item: e.target.value})
  }

  const [state, dispatch] = useReducer(taskReducer, initialState);
  console.log(state)
  return (
    <div className="App">
      <input placeholder="New Task" name="task" onChange={changeHandler} value={state.newTask}></input>
      <button onClick={()=>{
        dispatch({type: "ADD_TASK", payload: newTask});
        setNewTask({item: "", completed: false, id: Date.now()});}}>Add Task</button>
      <button onClick={()=>{
        dispatch({type: "CLEAR_COMPLETED"})
      }}>Clear Completed</button>
      {state.map((task)=>(<div onClick={()=>dispatch({type: "TOGGLE", payload: task.id})}>{task.item} {task.id}</div>))}
    </div>
  );
}

export default App;
