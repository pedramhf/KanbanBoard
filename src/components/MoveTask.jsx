import React, { useContext } from "react";
import { context } from "../context/context";
import _ from "lodash";
const MoveTask = () => {
  const { moveId, moveTitle, moveBody, style } = useContext(context);
  if (_.isEmpty(moveTitle)) return null;
  return (
    <div className="task" style={style} key={moveId}>
      <div className="title ">
        <span>{moveTitle}</span>
      </div>
      <p>{moveBody}</p>
    </div>
  );
};

export default MoveTask;
