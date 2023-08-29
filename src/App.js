import React from "react";
import Article from "./Article";
import Comment from "./Comment";



import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">Link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home page">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return(
    <div id="about page">
      <h2>About</h2>
    </div>

  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}

export default App;
