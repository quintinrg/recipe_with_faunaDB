import React from "react";
import Header from "./Header.js";

let rec_list = [
  { id: 'recipe1', name: 'Hot Dogs', difficulty: 'easy', ingredients: ['meat', 'more meat', 'water'], meals: ['lunch', 'dinner'], image: "/images/hotdog.png" }, 
  { id: 'recipe2', name: 'Roast Duck', difficulty: 'hard', ingredients: ['duck', 'herbs', 'vegetables'], meals: ['dinner'], image: "/images/roastduck.png" }, 
  { id: 'recipe3', name: 'Water', difficulty: 'none', ingredients: ['water'], meals: ['always'], image: "/images/water.png"},
  { id: 'recipe4', name: 'Elixer Of Life', difficulty: 'easy (if still sober)', ingredients: ['chilled glass'], meals: ['any time'], image: "/images/drink2.png"},
  { id: 'recipe5', name: 'Cake', difficulty: 'easy', ingredients: ['water', 'flour', 'eggs', 'sugar'], meals: ['lunch', 'dinner'], image: "/images/cake.png"},
  { id: 'recipe6', name: 'Strawberry Dessert', difficulty: 'hard', ingredients: ['strawberries', 'flour', 'eggs', 'sugar', 'cream'], meals: ['dessert'], image: "/images/strawberrydessert.png"},
  { id: 'recipe7', name: 'Burger', difficulty: 'medium', ingredients: ['meat', 'buns', 'condiments'], meals: ['lunch', 'dinner'], image: "/images/burger.png"}
] //Placeholder for actual data

const styles = {
  recipeList: {
    color:"darkgreen",
    margin:"1em",
    padding: 0
  },
  recipe: {
    display: "grid",
    gridTemplateAreas: `
      "icon header      difficulty" 
      "icon ingredients meals" 
      "icon ingredients select`,
    gridTemplateColumns: "15vw 1fr 15vw",
    border: "1px solid #eee",
    borderRadius: ".5rem",
    marginBottom: ".5rem",
    padding: ".5rem 0",
    alignItems: "center"
  },
  searchBar: {
    backgroundColor: 'lightgrey',
    margin: '1em'
  },
  image: {
    maxWidth: "250px"
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

const cleanTerm = term => term.toLowerCase().trim()

function Search(){
  const [terms, setTerms] = React.useState("")
  const [recipes, setRecipes] = React.useState(rec_list)

  console.log("refreshed")

  const filterList = () => {
    const filtered = rec_list.filter(recipe => cleanTerm(recipe.name).startsWith(cleanTerm(terms)) ) 
    setRecipes(filtered)
  }

  return(
    <div>
        <input style={styles.searchBar} placeholder="  Search" value={terms}  onChange={(e) => setTerms(e.target.value)}/>
        <button onClick={filterList}><p style={{ transform: "rotate(45deg)", margin: 0}}>O--</p></button>
        <RecipeList recipes={recipes} />
    </div>
  )
}

function RecipeList(props){
  return(
    <ul style={styles.recipeList}>
      {props.recipes.map(recipe => (<Recipe key={recipe.id} recipe={recipe}/>))}
    </ul>
  )
}

function Recipe (props){  
return (<li style={styles.recipe}>
  <header style={styles.title} style={{ gridArea: 'header'}}>{props.recipe.name}</header>
  <img src={props.recipe.image} style={{ gridArea: 'icon' }} style={styles.image}/>
  <p style={{ gridArea: 'ingredients'}}>Ingredients: {props.recipe.ingredients.join(', ')}</p>
  <p style={{gridArea: 'difficulty'}}>difficulty: {props.recipe.difficulty}</p>
  <p style={{gridArea: 'meals'}}>meals: {props.recipe.meals.join(', ')}</p>
  </li>)
}

export default App;


