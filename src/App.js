import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
       <header className="App-header" >
      <h3>Uway Booking System</h3>
      </header>
      <div className="my-2">
        <h4>Upload Multiple Files</h4>
      </div>
      <UploadFiles />
    </div>
  );
}

export default App;
