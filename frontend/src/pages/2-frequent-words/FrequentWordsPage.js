import React, { useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/2-frequent-words/frequentwords.css";
import TopNavigation from "../../components/TopNavigation";
import words1 from "../../assets/frequentwords1000px.png"
import words2 from "../../assets/frequentwords2000px.png"
import poem from "../../assets/frequentwordspoem.png"

function FrequentWordsPage() {

    useEffect(() => {window.scrollTo(0,0)});

    var size = false;
    window.innerWidth > 1960 ? (size = true) : (size = false);

    return(
        <div id='background-blue'>
            <div id = "frequentwords">
            <TopNavigation/>
                <h1>
                    FREQUENT.WORDS
                </h1>
                <p>FREQUENT.WORDS explores the most frequently used unique words when I interact with others online. Word analysis was conducted where the frequency of each word is presented and how this pattern has changed.</p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={poem} alt={"poem"} style={{position:"absolute", maxWidth: 800}}/>
                    {size && <img src={words2} alt={"poem"} style={{width: "100vw", position:"relative"}} />}
                    {!size && <img src={words1} alt={"poem"} style={{width:"100vw", position:"relative"}} />}
                </div>
                <BottomNavigation colour="blue"/>
                <div id= "footer">  
                    <p2> UP.LOADED - Carmen Yeh 2021 </p2>
                </div>
            </div>
        </div>
    )
}

export default FrequentWordsPage;