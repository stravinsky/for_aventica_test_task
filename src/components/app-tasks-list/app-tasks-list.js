import React from "react";
import AppSavedItem from "../app-saved-item";

import "./app-tasks-list.scss";


function AppTasksList({tasksList, markedItem, switchToDraft}) {

  const tasks = tasksList.map( ({id, ...restProps}) => {
    return <li className="app-tasks-place__item" key={id}><AppSavedItem switchToDraft={() => switchToDraft(id)} markedItem={() => markedItem(id)} {...restProps} /></li>
  });
  return (
    <div className="app-tasks-place-wrapper">
      <ul className="app-tasks-place">
        {tasks}
      </ul>
    </div>
  );
}

export default AppTasksList;