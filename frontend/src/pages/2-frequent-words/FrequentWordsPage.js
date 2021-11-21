import React from "react";
import BottomNavigation from "../../components/BottomNavigation";
import NavigationBar from "../../components/NavigationBar";
import "../../pages/2-frequent-words/FrequentWords.css"

function FrequentWordsPage() {

    return(
        <div id = "frequentwords">
           <NavigationBar />
            <h1>
                FREQUENT.WORDS
            </h1>
        <p>FREQUENT.WORDS explores the most frequently used unique words when I interact with others online. Word analysis was conducted where the frequency of each word is presented and how this pattern has changed.</p>

            <BottomNavigation />

        </div>
    )
}

export default FrequentWordsPage;