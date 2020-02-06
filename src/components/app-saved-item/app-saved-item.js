import React from "react";
import "./app-saved-item.scss";

function AppSavedItem({title, done, markedItem, switchToDraft}) {

  let clazz = "app-saved-item__indicator ";
  if (done) {
    clazz += "app-saved-item__indicator--done"
  }
  return (
    <div className="app-saved-item">
      <span className="app-saved-item__title">{title}</span>
      <div className={clazz}></div>
      <button onClick={switchToDraft} className="app-saved-item__btn">Draft</button>
      <button onClick={markedItem} className="app-saved-item__btn app-saved-item__btn--mark">Mark</button>
    </div>
  );
}

export default AppSavedItem;