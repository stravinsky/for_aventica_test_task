import React from "react";
import AppTitle from "../app-title";
import AppDoneCounter from "../app-done-counter";
import AppAddTask from "../app-add-task";
import AppTasksList from "../app-tasks-list";
import AppDraftBuffer from "../app-draft-buffer";
import "./app.scss";

class App extends React.Component {

  keyId = 1

  state = {
    appTitle: "React app for ",
    tasksList: [],
    draftBuffer: []
  }

  createDraftItem = (title) => {
    this.setState( ({draftBuffer}) => {
      const item = {
        title,
        done: false,
        id: this.keyId++
      }
      const newArr = [...draftBuffer, item]
      return ({
        draftBuffer: newArr
      })
    })
  }

  directlySaveItem = (title) => {
    this.setState( ({tasksList}) => {
      const item = {
        title,
        done: false,
        id: this.keyId++
      }
      const newArr = [...tasksList, item];
      return ({tasksList: newArr});
    })
  }

  markedItem = (id) => {
    this.setState( ({tasksList}) => {
      const idx = tasksList.findIndex( obj => obj.id === id);
      const oldItem = tasksList[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      const newArr = [...tasksList.slice(0, idx), newItem, ...tasksList.slice(idx + 1)];
      return ({tasksList: newArr})
    })
  }

  deleteDraftItem = (id) => {
    this.setState(({draftBuffer}) => {
      const idx = draftBuffer.findIndex(obj => obj.id === id);
      const newArr = [...draftBuffer.slice(0, idx), ...draftBuffer.slice(idx + 1)];
      return ({draftBuffer: newArr})
    })
  }

  editDraftItem = (id, title) => {
    this.setState(({draftBuffer}) => {
      const idx = draftBuffer.findIndex(obj => obj.id === id);
      console.log(idx);
      const oldItem = draftBuffer[idx];
      console.log(oldItem);
      const newItem = {...oldItem, title};
      console.log(newItem);
      const newArr = [...draftBuffer.slice(0, idx), newItem, ...draftBuffer.slice(idx + 1)];
      console.log(newArr)
      return({draftBuffer: newArr})
    })
  }

  switchToDraft = (id) => {
    this.setState(({tasksList, draftBuffer}) => {
      const idx = tasksList.findIndex(obj => obj.id === id);
      const oldItem = tasksList[idx];
      const newItem = {...oldItem, done: false};
      const newArrTasksList = [...tasksList.slice(0, idx), ...tasksList.slice(idx + 1)];
      const newArrDraftBuffer = [...draftBuffer, newItem];
      return ({tasksList: newArrTasksList, draftBuffer: newArrDraftBuffer})
    })
  }

  switchToSaved = (id) => {
    this.setState(({tasksList, draftBuffer}) => {
      const idx = draftBuffer.findIndex(obj => obj.id === id);
      const oldItem = draftBuffer[idx];
      const newItem = {...oldItem};
      const newArrDraftBuffer = [...draftBuffer.slice(0, idx), ...draftBuffer.slice(idx + 1)];
      const newArrTasksList = [...tasksList, newItem];
      return ({tasksList: newArrTasksList, draftBuffer: newArrDraftBuffer})
    })
  }

  
  greenMarker = () => {
    return this.state.tasksList.filter( ({done}) => done).length;
  }
  
  render() {
    const { appTitle, tasksList } = this.state;
    return (
      <div className="app">
        <div className="app__title">
          <AppTitle appTitle={appTitle}>
            <AppDoneCounter counter={this.greenMarker()}/>
          </AppTitle>
        </div>
        <div className="app__add-task">
          <AppAddTask createDraftItem={this.createDraftItem}   directlySaveItem={this.directlySaveItem} />
        </div>
        <div className="app__draft-buffer"><AppDraftBuffer switchToSaved={this.switchToSaved} editDraftItem={this.editDraftItem} deleteDraftItem={this.deleteDraftItem} draftBuffer={this.state.draftBuffer}/></div>
        <div className="app__tasks-place"><AppTasksList switchToDraft={this.switchToDraft} markedItem={this.markedItem} tasksList={tasksList}/></div>
        
      </div>
    );
  }
}

export default App;