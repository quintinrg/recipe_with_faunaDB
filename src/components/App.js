import React from "react";
import Header from "./Header.js";

let rec_list = [
  { id: 'recipe1', name: 'Hot Dogs', difficulty: 'easy', ingredients: ['meat', 'more meat', 'water'], meals: ['lunch', 'dinner'], image: "/images/hotDog.jpg" }, 
  { id: 'recipe2', name: 'Roast Duck', difficulty: 'tough', ingredients: ['meat', 'more meat', 'water'], meals: ['lunch', 'dinner'] }, 
  { id: 'recipe3', name: 'Water', difficulty: 'easy', ingredients: ['water'], meals: ['lunch', 'dinner']}
] //Placeholder for actual data

const styles = {
  recipeList: {
    color:"darkgreen",
    margin:"2em"
  },
  recipe: {
    display: "grid",
    // gridColumnStart: 2,
    margin:"1em",
  },
  searchBar: {
    backgroundColor: 'lightgrey',
    margin: '1em'
  },
  recipeGrid: {
    

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
    <div>
        <input style={styles.searchBar} placeholder="  Search"/>
        <button><p style={{ transform: "rotate(45deg)", margin: 0}}>O--</p></button>
      <ul>
        <RecipeList />
      </ul>
    </div>
  )
}
function RecipeList(){
  return(
    <ul style={styles.recipeList}>
      {rec_list.map(recipe => (<Recipe key={recipe.id} recipe={recipe}/>))}
    </ul>
  )
}

function Recipe (props){  
return (<li style={styles.recipe}><header style={styles.recipeGrid}>{props.recipe.name}</header><img src={props.recipe.image} style={styles.recipeGrid}/><p style={styles.recipeGrid}>Ingredients: {props.recipe.ingredients.join(', ')}</p><p style={styles.recipeGrid}>difficulty: {props.recipe.difficulty}</p></li>)
}

export default App;


