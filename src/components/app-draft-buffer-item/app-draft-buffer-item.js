import React from "react";
import "./app-draft-buffer-item.scss";

class DraftBufferItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
    console.log(this.props.draftBuffer)
  }
  

  onSmb = (e) => {
    e.preventDefault();
    console.log(this.props.id)
    console.log(this.state.title)
    this.props.editDraftItem(this.props.id, this.state.title);
  }

 render() {
   return (
    <div className="app-draft-buffer-item">

      <form onSubmit={this.onSmb}>
        <input onChange={(e) => {
          this.setState({title: e.target.value})
        }} type="text" className="app-draft-buffer-item__title" value={this.state.title}/>
      </form>
      <button onClick={this.props.deleteDraftItem} className="app-draft-buffer-item__remove-btn">Remove</button>
      <button onClick={this.props.switchToSaved} className="app-draft-buffer-item__save-btn">Save</button>
    </div>
  )
 }
  
}


export default DraftBufferItem;