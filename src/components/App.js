import React from "react";
import Header from "./Header.js";
import { useQuery } from 'urql';
import './App.css'


const RecipeQuery = `
  query{
      searchRecipies{
        data{
        name
        meals
        image
        link
      }
    }
  }`

  // {
  //   "ref": Ref(Collection("Recipe"), "281049854271029762"),
  //   "ts": 1604288878080000,
  //   "data": {
  //     "name": "Roast Duck",
  //     "difficulty": "hard",
  //     "ingredients": [
  //       "duck",
  //       "herbs",
  //       "vegetables"
  //     ],
  //     "meals": [
  //       "dinner"
  //     ],
  //     "image": "/images/roastduck.png",
  //     "link": "https://www.duck.com"
  //   }
  // }

// const RecipeQuery = `
//   query{
//     recipesList{
//       items{
//         name
//         id
//         meals
//         image {
//           id
//           downloadUrl
//         }
//         link
//       }
//     }
//   }`

let rec_list = [
  { id: 'recipe1', name: 'Hot Dogs', difficulty: 'easy', ingredients: ['meat', 'more meat', 'water'], meals: ['lunch', 'dinner'], image: "/images/hotdog.png", link: "http://www.duck.com" }, 
  { id: 'recipe2', name: 'Roast Duck', difficulty: 'hard', ingredients: ['duck', 'herbs', 'vegetables'], meals: ['dinner'], image: "/images/roastduck.png", link: "https://www.duck.com" }, 
  { id: 'recipe3', name: 'Water', difficulty: 'none', ingredients: ['water'], meals: ['always'], image: "/images/water.png", link: "https://www.duck.com"},
  { id: 'recipe4', name: 'Elixer Of Life', difficulty: 'easy (if still sober)', ingredients: ['chilled glass'], meals: ['any time'], image: "/images/drink2.png", link: "https://www.duck.com"},
  { id: 'recipe5', name: 'Cake', difficulty: 'easy', ingredients: ['water', 'flour', 'eggs', 'sugar'], meals: ['lunch', 'dinner'], image: "/images/cake.png", link: "https://www.duck.com"},
  { id: 'recipe6', name: 'Strawberry Dessert', difficulty: 'hard', ingredients: ['strawberries', 'flour', 'eggs', 'sugar', 'cream'], meals: ['dessert'], image: "/images/strawberrydessert.png", link: "https://www.duck.com"},
  { id: 'recipe7', name: 'Burger', difficulty: 'medium', ingredients: ['meat', 'buns', 'condiments'], meals: ['lunch', 'dinner'], image: "/images/burger.png", link: "https://www.duck.com"}
] //Placeholder for actual data



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
  // const [recipes, setRecipes] = React.useState(rec_list)
  const [result] = useQuery({
    query: RecipeQuery,
  });
  const { data, fetching, error } = result;
  if  (fetching) return <p>Loading...</p>
  if (error) return <p>Oh crap {error.message}</p>;

  console.log("refreshed")
  console.log(data.searchRecipies.data)

  let displayList = data.searchRecipies.data.filter(recipe => cleanTerm(recipe.name).startsWith(cleanTerm(terms)) ) 

  const filterList = () => {
    displayList = data.searchRecipies.data.filter(recipe => cleanTerm(recipe.name).startsWith(cleanTerm(terms)) ) 
    // setRecipes(filtered)
  }

  return(
    <div className="search">
        <input placeholder="  Search" value={terms}  onChange={(e) => setTerms(e.target.value)}/>
        <button onClick={filterList}><p className="search-icon">O--</p></button>
        <RecipeList recipes={displayList} />
    </div>
  )
}

function RecipeList(props){
  return(
    <ul className="recipe-list">
      {props.recipes.map(recipe => (<Recipe key={recipe.id} recipe={recipe}/>))}
    </ul>
  )
}

function Recipe (props){  
console.log(props.recipe)
return (<li>
  <a href={props.recipe.link}>{props.recipe.name}</a>
  <img src={props.recipe.image}/>
  <p className="ingredients">Key Ingredients: {props.recipe.ingredients}</p>
  <p className="difficulty">difficulty: {props.recipe.difficulty}</p>
  <p className="meals">meals: {props.recipe.meals.join(', ')}</p>
  </li>)
}

export default App;


