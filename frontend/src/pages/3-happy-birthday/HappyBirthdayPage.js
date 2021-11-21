import React from "react";
import BirthdayDot from "../../components/3-happy-birthday/BirthdayDot";
import NavigationBar from "../../components/NavigationBar";

function HappyBirthdayPage() {

    return(
        <div>
            <h1>
                Its ma birthday
            </h1>
            <NavigationBar />
            <BirthdayDot paddingLeft={10} divSize={100}/>
            <BirthdayDot paddingLeft={50} divSize={100}/>
            <BirthdayDot paddingLeft={90} divSize={100}/>
            <BirthdayDot paddingLeft={40} divSize={100}/>
            <BirthdayDot paddingLeft={60} divSize={100}/>
            <BirthdayDot paddingLeft={30} divSize={100}/>
        </div>
    )
}

export default HappyBirthdayPage;