import React, { useState } from "react";

import { context } from "./context";

const ContextApi = ({ children }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [ws1lTasks, setWs1lTasks] = useState([]);
  const [ws1rTasks, setWs1rTasks] = useState([]);
  const [ws2lTasks, setWs2lTasks] = useState([]);
  const [ws2rTasks, setWs2rTasks] = useState([]);

  const [x, setX] = useState();
  const [y, setY] = useState();
  const [moveId, setMoveId] = useState();
  const [moveTitle, setMoveTitle] = useState();
  const [moveBody, setMoveBody] = useState();

  const [style, setStyle] = useState();

  const position = (event) => {
    setX(event.clientX - 10);
    setY(event.clientY - 10);
    setStyle({ position: "absolute", left: `${x}px`, top: `${y}px` });
  };

  const readyToMove = (id, title, body) => {
    setMoveId(id);
    setMoveTitle(title);
    setMoveBody(body);
    const eachWidth = window.innerWidth / 4;
    const eachHeight = window.innerHeight / 2;
    const xpart = Math.ceil(x / eachWidth);
    const ypart = Math.ceil(y / eachHeight);

    switch (xpart) {
      case 1: {
        setTasks(tasks.filter((task) => task.id !== id));

        break;
      }
      case 2: {
        if (ypart === 1) {
          setWs1lTasks(ws1lTasks.filter((task) => task.id !== id));
          break;
        } else {
          setWs2lTasks(ws2lTasks.filter((task) => task.id !== id));
          break;
        }
      }
      case 3: {
        if (ypart === 1) {
          setWs1rTasks(ws1rTasks.filter((task) => task.id !== id));
          break;
        } else {
          setWs2rTasks(ws2rTasks.filter((task) => task.id !== id));
          break;
        }
      }
      case 4: {
        setDoneTasks(doneTasks.filter((task) => task.id !== id));

        break;
      }
    }
  };
  const resetMoveItem = () => {
    setMoveId();
    setMoveTitle();
    setMoveBody();
  };
  const endedMove = () => {
    if (moveId) {
      const eachWidth = window.innerWidth / 4;
      const eachHeight = window.innerHeight / 2;
      const xpart = Math.ceil(x / eachWidth);
      const ypart = Math.ceil(y / eachHeight);

      const newTask = { id: moveId, title: moveTitle, body: moveBody };

      switch (xpart) {
        case 1: {
          let myTasks = tasks;
          myTasks.push(newTask);
          setTasks(myTasks);

          break;
        }
        case 2: {
          if (ypart === 1) {
            let myTasks = ws1lTasks;
            myTasks.push(newTask);
            setWs1lTasks(myTasks);
            break;
          } else {
            let myTasks = ws2lTasks;
            myTasks.push(newTask);
            setWs2lTasks(myTasks);
            break;
          }
        }
        case 3: {
          if (ypart === 1) {
            let myTasks = ws1rTasks;
            myTasks.push(newTask);
            setWs1rTasks(myTasks);
            break;
          } else {
            let myTasks = ws2rTasks;
            myTasks.push(newTask);
            setWs2rTasks(myTasks);
            break;
          }
        }
        case 4: {
          let myTasks = doneTasks;
          myTasks.push(newTask);
          setDoneTasks(myTasks);

          break;
        }
      }
    }
    resetMoveItem();
  };

  const reset = () => {
    setTitle("");
    setBody("");
  };

  const createTask = (e) => {
    e.preventDefault();
    const id = Math.random(100);

    let newTask = { id, title, body };
    const myTasks = tasks;
    myTasks.push(newTask);
    setTasks(tasks);

    reset();
  };

  return (
    <context.Provider
      value={{
        title,
        setTitle,
        body,
        setBody,
        tasks,
        setTasks,
        doneTasks,
        setDoneTasks,
        ws1lTasks,
        setWs1lTasks,
        ws1rTasks,
        setWs1rTasks,
        ws2lTasks,
        setWs2lTasks,
        ws2rTasks,
        setWs2rTasks,
        moveId,
        setMoveId,
        moveTitle,
        setMoveTitle,
        moveBody,
        setMoveBody,
        style,
        setStyle,
        position,
        readyToMove,
        endedMove,
        reset,
        createTask,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextApi;
