import React from "react";


const styles = {
    header: {
      display: "flex"
    },

    brand: {
      flex:"1",
      padding: "15px",
      color: 'beige',
    },

    link: {
    //   flex:"1",
      color: "green",
      // fontSize: "2em",
    },

    navbar: {
      padding: "40px"
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
    <a href="#" style = {styles.link}>Create Recipe</a>
    </nav>        
)
}

function Brand(){
return(
    <h1 style = {styles.brand}>Useless Recipes</h1>
)
}

export default Header;