import React from "react";

function CategoryFilter({categories,chooseCategory, handleCategoryChange}) {



  

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>

        (<button id={category} className={category===chooseCategory?"selected":null} onClick={handleCategoryChange} key={category} >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;

//create another function that will filter the categories
//put that function in app
//filter the tasks by category in app
//pass function as prop from app to categoryFilter
