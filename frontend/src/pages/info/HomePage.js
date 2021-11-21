import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Header from "../../components/info/Header";
import About from "../../components/info/About";
import "../../pages/info/Styles.css"
function HomePage() {

        
    return(
        <div>
            <NavigationBar/>
        <img src="../../assets/header.png" alt="UP.LOADED">
        </img>
        
    <Header/>
        <About/>
        </div>
        
      
   
 
   
    )

    
        
}

export default HomePage;