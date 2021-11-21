import React from "react";
import BirthdayDot from "../../components/3-happy-birthday/BirthdayDot";
import BottomNavigation from "../../components/BottomNavigation";
import NavigationBar from "../../components/NavigationBar";
import "../../pages/3-happy-birthday/HappyBirthday.css"
function HappyBirthdayPage() {

    return(
        <div id = "happybirthday">
            <h1>
                HAPPY.BIRTHDAY
            </h1>
        <p>HAPPY.BIRTHDAY explores the idea of making meaningful posts through analysing how frequent I post a ‘generic’ birthday message. This experiment was formed through conducting reading analysis of posts where each birthday message is highlighted by a white dot. What counts as a meaningful post?</p>
            <NavigationBar />
            <BirthdayDot paddingLeft={10} divSize={100}/>
            <BirthdayDot paddingLeft={50} divSize={100}/>
            <BirthdayDot paddingLeft={90} divSize={100}/>
            <BirthdayDot paddingLeft={40} divSize={100}/>
            <BirthdayDot paddingLeft={60} divSize={100}/>
            <BirthdayDot paddingLeft={30} divSize={100}/>
            <BottomNavigation />
        </div>
    )
}

export default HappyBirthdayPage;