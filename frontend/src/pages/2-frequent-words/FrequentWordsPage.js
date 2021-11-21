import React from "react";
import BottomNavigation from "../../components/BottomNavigation";
import NavigationBar from "../../components/NavigationBar";

function FrequentWordsPage() {

    return(
        <div>
            <h1>
                Here are my most frequent words
            </h1>
            <NavigationBar />
            <BottomNavigation />
        </div>
    )
}

export default FrequentWordsPage;