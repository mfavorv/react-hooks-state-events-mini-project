import React from "react";
import Task from "./Task.js"

function TaskList({tasks, onDelete}) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=> (
        <Task key={index} 
        text={task.text}
        category={task.category}  
        task={task} 
        tasks={tasks} 
        onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default TaskList;