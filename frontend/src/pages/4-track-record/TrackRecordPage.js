import React from "react";
import NavigationBar from "../../components/NavigationBar";
import LineGroup1 from "../../components/4-track-record/LineGroup1";
import LineGroup2 from "../../components/4-track-record/LineGroup2";
import LineGroup3 from "../../components/4-track-record/LineGroup3";
import BottomNavigation from "../../components/BottomNavigation";

function TrackRecordPage() {

    return(
        <div>
            <h1>
                Here is my track record
            </h1>
            <NavigationBar />
            <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                <LineGroup1 />
                <LineGroup2 />
                <LineGroup3 />
            </div>
            <BottomNavigation />
        </div>
    )
}

export default TrackRecordPage;