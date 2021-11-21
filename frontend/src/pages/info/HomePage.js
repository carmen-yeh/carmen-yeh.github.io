import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Header from "../../components/info/Header";
import About from "../../components/info/About";
import "../../pages/info/homepage.css"
import LogoImage from "../../assets/header.png"
import BottomNavigation from "../../components/BottomNavigation";

function HomePage() {

        
    return(
        <div>
            <NavigationBar/>
            <img src={LogoImage} alt="UP.LOADED"/>
            <Header/>
            <About/>
            <BottomNavigation />
        </div>
        
    )
}

export default HomePage;