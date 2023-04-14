import React from "react";
// Components
import { NavBar } from "./components/navbar";

// Features
import Posts from "./features/posts/posts";
import { SideBar } from "./components/sidebar";

// CSS
import './App.css';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <main>
          <div className="posts"> 
        <Posts />
        </div>
        <div className="sideBar">
          <SideBar/>
        </div>
        </main>
      
    </div>
  );
}

export default App;
