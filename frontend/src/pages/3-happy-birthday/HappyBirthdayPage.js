import React from "react";
import BirthdayDot from "../../components/3-happy-birthday/BirthdayDot";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/3-happy-birthday/happybirthday.css";
import TopNavigation from "../../components/TopNavigation";

function HappyBirthdayPage() {

    return(
        <div id = "happybirthday">
         <TopNavigation/>
            <h1>
                HAPPY.BIRTHDAY
            </h1>
        <p>HAPPY.BIRTHDAY explores the idea of making meaningful posts through analysing how frequent I post a ‘generic’ birthday message. This experiment was formed through conducting reading analysis of posts where each birthday message is highlighted by a white dot. What counts as a meaningful post?</p>
         
            <BirthdayDot paddingLeft={10} divSize={100} verticalSpace={10}/>
            <BirthdayDot paddingLeft={40} divSize={100} verticalSpace={10}/>
            <BirthdayDot paddingLeft={80} divSize={100} verticalSpace={10}/>
            <BirthdayDot paddingLeft={25} divSize={100} verticalSpace={20}/>
            <BirthdayDot paddingLeft={7} divSize={100} verticalSpace={80}/>
            <BirthdayDot paddingLeft={85} divSize={100} verticalSpace={120}/>
        <BirthdayDot paddingLeft={30} divSize={100} verticalSpace={10}/>
          <BirthdayDot paddingLeft={75} divSize={100} verticalSpace={80}/>
        <BirthdayDot paddingLeft={5} divSize={100} verticalSpace={10}/>
          <BirthdayDot paddingLeft={35} divSize={100} verticalSpace={10}/>
        <BirthdayDot paddingLeft={10} divSize={100} verticalSpace={50}/>
        <BirthdayDot paddingLeft={70} divSize={100} verticalSpace={10}/>
        <BirthdayDot paddingLeft={60} divSize={100} verticalSpace={20}/>
        <BirthdayDot paddingLeft={80} divSize={100} verticalSpace={0}/>
        <BirthdayDot paddingLeft={15} divSize={100} verticalSpace={10}/>
        <BirthdayDot paddingLeft={45} divSize={100} verticalSpace={10}/>
        <BirthdayDot paddingLeft={90} divSize={100} verticalSpace={0}/>
        
            <BottomNavigation />
        <div id= "footer">  
        <p2> UP.LOADED - Carmen Yeh 2021 </p2>
                </div>
        </div>
    )
}

export default HappyBirthdayPage;