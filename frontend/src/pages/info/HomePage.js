import React from "react";
import Header from "../../components/info/Header";
import About from "../../components/info/About";
import "../../pages/info/homepage.css";
import LogoImage from "../../assets/header.png";
import BottomNavigation from "../../components/BottomNavigation";
import TopNavigation from "../../components/TopNavigation";


function HomePage() {

    function displayDesktop() {
        return (
            <div>
                <TopNavigation/>
                    <img src={LogoImage} alt="UP.LOADED"/>
                    <Header/>
                    <About/>
                    <BottomNavigation colour="blue"/>
                <div id= "footer">  
                <p> UP.LOADED - Carmen Yeh 2021 </p>
                
                <p2> This project was produced by Carmen Yeh as part of the Visual Communication Honours degree at the University of Technology Sydney. Special thanks to Monica Monin and Zoë Sadokierski for assisting in initial experimentation and general guidance, and Alexandra Chalmers Braithwaite for significantly contributing with project development, direction and guidance. Credits to Maggie So for assisting with web development. </p2>
                
                </div>
            </div>
        )
    }

    function displayMobile() {
        return (
            <div style={{paddingTop: "50vh", paddingBottom: "50vh"}}>
                <p> This project is best viewed on Desktop. </p>
            </div>
        )
    }
        
    return(
        <div>
            {window.innerWidth < 500 && <div style={{backgroundColor: "#000"}}> {displayMobile()} </div>}
            {window.innerWidth >= 500 && <div id='background'> {displayDesktop()} </div>} 
        </div>
        
    )
}

export default HomePage;