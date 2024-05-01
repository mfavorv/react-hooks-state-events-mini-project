import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newTask = { text: taskText, category: taskCategory };
    onTaskFormSubmit(newTask);
      setTaskText("");
    setTaskCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => (
            category !== "All" && (
              <option key={index} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
