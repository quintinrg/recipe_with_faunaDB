import React from "react";

let rec_list = ['recipe', 'recipe', 'recipe']

const styles = {
    header: {
      display: "flex"
    },

    brand: {
      flex:"1",
      color: 'maroon'
    },

    link: {
    //   flex:"1",
      color: "green",
      fontSize: "2em",
    },

    navbar: {
    //   flex:"1",
    }
  } 
  
function Header(){
return(
    <div style = {styles.header}>
    <Brand/>
    <Nav/>
    </div>
)
}

function Nav(){
return(    
    <nav style = {styles.navbar}>
    <a href="#" style = {styles.link}>Menu</a>
    </nav>        
)
}

function Brand(){
return(
    <h1 style = {styles.brand}>Crappy Recipes</h1>
)
}

export default Header;