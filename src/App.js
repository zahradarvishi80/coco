import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Page/Home";
import Details from "./Page/Details";
import "./styles.css"
const App=()=> {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details/:instagramId" element={<Details />} />
      </Routes>
    </div>
  );
}
export default App

// instagramId