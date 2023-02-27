import { createContext } from "react";

export const context = createContext({
  x: "",
  setX: () => {},
  y: "",
  setY: () => {},
  readyToMove: () => {},
  endedMove: () => {},
  title: "",
  setTitle: () => {},
  body: "",
  setBody: () => {},
  tasks: "",
  setTasks: () => {},
  createTask: () => {},
  reset: () => {},
  userWidth: "",
  ws1lTasks: "",
  setWs1lTasks: () => {},
});
