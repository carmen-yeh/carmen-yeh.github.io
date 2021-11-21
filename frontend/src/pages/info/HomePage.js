import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Header from "../../components/info/Header";
import About from "../../components/info/About";
import "../../pages/info/styles.css"
import LogoImage from "../../assets/header.png"

function HomePage() {

        
    return(
        <div>
            <NavigationBar/>
            <img src={LogoImage} alt="UP.LOADED" style={{height: 100}} />
            <Header/>
            <About/>
        </div>
        
    )
}

export default HomePage;