import React from "react";

function App() {
  return (
    <main>
      <Header/>
      <Search/>
    </main>
  );
}

function Header(){
  return(
    <div>
    <Brand/>
    <Nav/>
    </div>
  )
}

function Nav(){
  return(
    <nav>
      <a href="#">Link</a>
    </nav>
  )
}
function Brand(){
  return(
    <h1>Crappy Brand</h1>
  )
}

const searchStyles = {
  fontWeight: 'bold'
}
function Search(){
  return(
    <ul style={searchStyles}>
      <Recipe />
    </ul>
  )
}
function Recipe(){
  return(
    <li>"Some Relevant Data"</li>
  )
}

export default App;
