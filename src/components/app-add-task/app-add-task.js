import React from "react";
import "./app-add-task.scss";

class AppAddTask extends React.Component {

  draft = "draft"
  save = "save"
  
  render() {
    return (
      <div className="app-addtask-wrapper">
        <div className="app-addtask">
          <input ref={"input"} className="app-addtask__input" type="text" />
          <button onClick={() => {
            this.props.createDraftItem(this.refs.input.value);
          }} className="app-addtask__draft-btn">Draft</button>
          <button onClick={() => {
             this.props.directlySaveItem(this.refs.input.value);
          }} className="app-addtask__save-btn">Save</button>
        </div>
      </div>
    );
  }
}

export default AppAddTask;