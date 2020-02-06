import React from "react";
import DraftBufferItem from "../app-draft-buffer-item";
import "./app-draft-buffer.scss";

function AppDraftBuffer({draftBuffer, editDraftItem, deleteDraftItem, switchToSaved}) {

  console.log(draftBuffer)
  const draftItems = draftBuffer.map(({id, ...restProps}) => {
    return <li key={id}><DraftBufferItem switchToSaved={ () => switchToSaved(id)} editDraftItem={editDraftItem} id={id} deleteDraftItem={() => deleteDraftItem(id)}  draftBuffer={draftBuffer} {...restProps}/></li>
  })
  return (
    <div className="app-draft-buffer-wrapper">
      <div className="app-draft-buffer">
        <h2 className="app-draft-buffer__title">Draft</h2>
        <ul className="app-draft-buffer__list">
          {draftItems}
        </ul>
      </div>
    </div>
  );
}

export default AppDraftBuffer;