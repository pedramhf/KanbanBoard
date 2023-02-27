import React, { useContext } from "react";
import { context } from "../../../context/context";
const Workstream1Right = () => {
  const { ws1rTasks, readyToMove } = useContext(context);
  return (
    <div className="subTask">
      <div className="subTitle">task2</div>
      <div className="taskContainer">
        {ws1rTasks.map((task) => (
          <div
            key={task.id}
            className="task"
            onMouseDown={() => readyToMove(task.id, task.title, task.body)}
          >
            <div className="title yellow">{task.title}</div>
            <p>{task.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workstream1Right;
