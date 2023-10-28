import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() { 
  const [inputValue, SetInputValu] = useState("");
  const [toDoData, setToDoData] = useState([]);

  const addToDOHandeler = () => {
    setToDoData((prev) => [...prev, inputValue]);
    SetInputValu("");
  };

  const editToDOHandeler = (index) => {
    let a = prompt(" To Do");
    const arr = [...toDoData];
    arr[index] = a;
    setToDoData(arr);
  };

  const deleteToDOHandeler = (index) => {
const arr = toDoData.filter((e,i)=> i!==index)
setToDoData(arr)    
  };
  const deleteAllToDo  = () => {
    setToDoData([])
  };

  return (
    <div  className="Maintodo">
      <input className="maininp"
        onChange={(e) => SetInputValu(e.target.value)}
        placeholder="To Do List"
        value={inputValue}
      />
      <button className="todobtn" onClick={addToDOHandeler}>Add</button>
      <button className="todobtn" onClick={deleteAllToDo}>Delete All</button>
      <ul>
        {toDoData.length
          ? toDoData.map((e, i) => (
              <li key={i}>
                {e} <button className="todobtn" onClick={() => editToDOHandeler(i)}>Edit</button>
                <button className="todobtn" onClick={() => deleteToDOHandeler(i)}>Delete</button>
              </li>
            ))
          : "Todo lists"}
      </ul>
    </div>
  );
}


export default App;
