import React, { useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/2-frequent-words/frequentwords.css";
import TopNavigation from "../../components/TopNavigation";

function FrequentWordsPage() {

    useEffect(() => {window.scrollTo(0,0)});

    return(
        <div id='background-blue'>
            <div id = "frequentwords">
            <TopNavigation/>
                <h1>
                    FREQUENT.WORDS
                </h1>
                <p>FREQUENT.WORDS explores the most frequently used unique words when I interact with others online. Word analysis was conducted where the frequency of each word is presented and how this pattern has changed.</p>

                <BottomNavigation colour="blue"/>
                <div id= "footer">  
                    <p2> UP.LOADED - Carmen Yeh 2021 </p2>
                </div>
            </div>
        </div>
    )
}

export default FrequentWordsPage;