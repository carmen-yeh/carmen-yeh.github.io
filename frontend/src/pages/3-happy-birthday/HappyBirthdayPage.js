import React from "react";
import BirthdayDot from "../../components/3-happy-birthday/BirthdayDot";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/3-happy-birthday/HappyBirthday.css";
import TopNavigation from "../../components/TopNavigation";

function HappyBirthdayPage() {

    return(
        <div id = "happybirthday">
         <TopNavigation/>
            <h1>
                HAPPY.BIRTHDAY
            </h1>
        <p>HAPPY.BIRTHDAY explores the idea of making meaningful posts through analysing how frequent I post a ‘generic’ birthday message. This experiment was formed through conducting reading analysis of posts where each birthday message is highlighted by a white dot. What counts as a meaningful post?</p>
         
            <BirthdayDot paddingLeft={10} divSize={100} verticalSpace={0}/>
            <BirthdayDot paddingLeft={50} divSize={100} verticalSpace={50}/>
            <BirthdayDot paddingLeft={90} divSize={100} verticalSpace={20}/>
            <BirthdayDot paddingLeft={40} divSize={100} verticalSpace={70}/>
            <BirthdayDot paddingLeft={60} divSize={100} verticalSpace={10}/>
            <BirthdayDot paddingLeft={30} divSize={100} verticalSpace={20}/>
        
            <BottomNavigation />
        <div id= "footer">  
        <p2> UP.LOADED - Carmen Yeh 2021 </p2>
                </div>
        </div>
    )
}

export default HappyBirthdayPage;