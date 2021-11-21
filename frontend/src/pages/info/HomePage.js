import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Header from "../../components/info/Header";
import About from "../../components/info/About";
import "../../pages/info/Styles.css"
import LogoImage from "../../assets/header.png"

function HomePage() {

        
    return(
        <div>
            <NavigationBar/>
            <img src={LogoImage} alt="UP.LOADED"/>
            <Header/>
            <About/>
        </div>
        
    )
}

export default HomePage;