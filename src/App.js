import React from "react";
// Components
import { NavBar } from "./components/navbar";

// Features
import Posts from "./features/posts/posts";

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <main>
        <Posts />
        </main>
      
    </div>
  );
}

export default App;
