import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {

const [selectedTask,setSelectedTask]=useState("All")
const [selectedName, setSelectedName]=useState("")


  function handleCategoryChange(event){
    setSelectedTask(event.target.value)
  }

  function handleNameChange(event){
    setSelectedName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({
      text: selectedName,
      category: selectedTask
    })

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNameChange} value={selectedName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={selectedTask}>
          <option value="All">Category</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
