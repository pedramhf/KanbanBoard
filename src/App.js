import { useContext } from "react";
import Done from "./components/done";
import MoveTask from "./components/MoveTask";
import Workstream1Left from "./components/progress/workstream1/workstream1Left";
import Workstream1Right from "./components/progress/workstream1/workstream1Right";
import Workstream2Left from "./components/progress/workstream2/workstream2Left";
import Workstream2Right from "./components/progress/workstream2/workstream2Right";
import Todo from "./components/todo";
import { context } from "./context/context";

function App() {
  const { position, endedMove } = useContext(context);

  return (
    <div className="main" onMouseMove={position} onMouseUp={endedMove}>
      <Todo />
      <MoveTask />

      <div className="progress">
        <span className="title">PROGRESS</span>
        <div className="subProgress">
          <span className="title green">work stream 1</span>

          <span className="flex">
            <Workstream1Left />
            <Workstream1Right />
          </span>
        </div>
        <div className="subProgress">
          <span className="title green">work stream 2</span>

          <div className="flex">
            <Workstream2Left />
            <Workstream2Right />
          </div>
        </div>
      </div>

      <Done />
    </div>
  );
}

export default App;
