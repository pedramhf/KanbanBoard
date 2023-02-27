import React, { useContext } from "react";
import { context } from "../../../context/context";
const Workstream2Left = () => {
  const { ws2lTasks, readyToMove } = useContext(context);
  return (
    <div className="subTask">
      <div className="subTitle">task1</div>
      <div className="taskContainer">
        {ws2lTasks.map((task) => (
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

export default Workstream2Left;
