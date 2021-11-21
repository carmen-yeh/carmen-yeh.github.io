import React from "react";
import BirthdayDot from "../../components/BirthdayDot";
import NavigationBar from "../../components/NavigationBar";

function HappyBirthdayPage() {

    return(
        <div>
            <h1>
                Its ma birthday
            </h1>
            <NavigationBar />
            <BirthdayDot paddingLeft={100} divSize={100}/>
        </div>
    )
}

export default HappyBirthdayPage;