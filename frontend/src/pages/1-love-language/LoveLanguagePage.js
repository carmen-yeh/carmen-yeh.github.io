import React from "react";
import LoveBox from "../../components/1-love-language/LoveBox";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/1-love-language/lovelanguage.css";
import TopNavigation from "../../components/TopNavigation";

function LoveLanguagePage() {

    return(
        <div>
        <TopNavigation/>
        <div id = 'lovelanguage'>
            
            <h1>LOVE.LANGUAGE</h1>
            <p>LOVE.LANGUAGE explores the idea of expressing love through the sending of images online to loved ones. This is an image analysis of photos I’ve posted online over time where each white square is an image related to food. I highlighted these findings and linked them to the idea of a digital love language.</p>

                <div style={{display: 'flex'}}>
            <LoveBox paddingLeft={0} text={"e"} verticalSpace={0}/>
            <LoveBox paddingLeft={0} text={"w"} verticalSpace={0}/>
     

        </div>
            <BottomNavigation />
        <div id= "footer">  
        <p2> UP.LOADED - Carmen Yeh 2021 </p2>
                </div>
        </div>
        </div>
        
    )
}

export default LoveLanguagePage;