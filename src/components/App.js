import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [chooseCategory,setChooseCategory]=useState("All")
  const [array,setArray]=useState(TASKS)

  const handleCategoryChange=(event)=>{
    setChooseCategory(event.target.id)
    
    console.log(chooseCategory)

  }

  function onTaskFormSubmit(element){
    setArray([...array,element])
  }

  const itemsToDisplay=array.filter((task)=>{
  if (chooseCategory==="All") {return true;}

  else{
    return (task.category===chooseCategory)
}})
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  chooseCategory={chooseCategory} categories={CATEGORIES} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={itemsToDisplay} />
      
    </div>
  );
}

export default App;
