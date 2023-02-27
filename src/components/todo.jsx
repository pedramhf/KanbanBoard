import React, { useContext, useEffect, useRef } from "react";
import { context } from "../context/context";

const Todo = () => {
  const { title, setTitle, body, setBody, readyToMove, tasks, createTask } =
    useContext(context);

  return (
    <div className="todo">
      <span className="title">TO DO</span>
      <div className="taskContainer">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task"
            onMouseDown={() => readyToMove(task.id, task.title, task.body)}
          >
            <div className="title red">{task.title}</div>
            <p>{task.body}</p>
          </div>
        ))}

        <form onSubmit={createTask} className="task newTask">
          <input
            className="inputTitle"
            name="title"
            autoFocus
            value={title}
            placeholder="Write New Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="inputBody"
            name="body"
            value={body}
            placeholder="Write New Body"
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit" className="green">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
