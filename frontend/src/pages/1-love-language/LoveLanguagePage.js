import React from "react";
import LoveBox from "../../components/1-love-language/LoveBox";
import BottomNavigation from "../../components/BottomNavigation";
import NavigationBar from "../../components/NavigationBar";
import "../../pages/1-love-language/lovelanguage.css"

function LoveLanguagePage() {

    return(
        <div id = 'lovelanguage'>
            <NavigationBar/>
        
            <h1>LOVE.LANGUAGE</h1>
            <p>LOVE.LANGUAGE explores the idea of expressing love through the sending of images online to loved ones. This is an image analysis of photos I’ve posted online over time where each white square is an image related to food. I highlighted these findings and linked them to the idea of a digital love language.</p>
        
            <LoveBox paddingLeft={10}/>
            <LoveBox paddingLeft={80} text={"Me too"}/>
            <LoveBox paddingLeft={50} text={"Have some food"}/>
            <LoveBox paddingLeft={30} text={"I want fruit"}/>
            <LoveBox paddingLeft={60} text={"Me too"}/>
            <LoveBox paddingLeft={40} text={"Thanks"}/>
            <LoveBox paddingLeft={70} text={"Don't forget me"}/>
            <BottomNavigation />
        </div>
    )
}

export default LoveLanguagePage;