import React from "react";
import Header from "./Header.js";

let rec_list = ['recipe', 'recipe', 'recipe'] //Placeholder for actual data

const styles = {
  recipeList: {
    color:"darkgreen",
    margin:"2em"
  },
  recipe: {
    margin:"1em"
  },
}


function App() {
  return (
    <main>
      <Header/>
      <Search/>
    </main>
  );
}


function Search(){
  return(
    <ul>
      <Recipe />
    </ul>
  )
}
function Recipe(){
  return(
    <ul style={styles.recipeList}>
      {rec_list.map(recipe => (
        <li style={styles.recipe}>{recipe}</li>
      ))}
    </ul>
  )
}

export default App;


