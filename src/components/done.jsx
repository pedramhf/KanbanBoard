import React, { useContext } from "react";
import { context } from "../context/context";
const Done = () => {
  const { doneTasks, readyToMove } = useContext(context);
  return (
    <div className="done">
      <span className="title">DONE</span>
      <div className="taskContainer">
        {doneTasks.map((task) => (
          <div
            key={task.id}
            className="task"
            onMouseDown={() => readyToMove(task.id, task.title, task.body)}
          >
            <div className="title green">{task.title}</div>
            <p>{task.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Done;
