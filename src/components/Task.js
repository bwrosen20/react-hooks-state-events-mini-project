import React, {useState} from "react";

function Task({text,category}) {

const [visible, setVisible]=useState(true);

function deleteTask(){
  setVisible((value)=>!value)
}
    
  return (
    <div className="task">
    {visible && <div>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text} onClick={deleteTask}>X</button>
    </div>}
      </div>
  );
}

export default Task;


