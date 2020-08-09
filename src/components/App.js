import React from "react";
import Header from "./Header.js";

let rec_list = ['recipe0', 'recipe1', 'recipe2', 'recipe3', 'recipe4'] //Placeholder for actual data

const styles = {
  recipeList: {
    color:"darkgreen",
    margin:"2em"
  },
  recipe: {
    margin:"1em"
  },
  searchBar: {
    backgroundColor: 'lightgrey'
  }
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
    <div>>
        <input style={styles.searchBar}/>
      <ul>
        <Recipe />
      </ul>
    </div>
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


