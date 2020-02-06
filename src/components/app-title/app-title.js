import React from "react";
import "./app-title.scss";

function AppTitle( {appTitle, children} ) {
  return (
    <div className="app-title">
      <h2 className="app-title__name">{appTitle} 
        <span className="app-title__brand-name">Aventica</span>
      </h2>
      <div className="app-title__counter">{children}</div>
    </div>
  );
}

export default AppTitle;