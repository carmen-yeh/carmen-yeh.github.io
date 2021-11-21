import React from "react";
import Line from "../../components/track-record/Line";
import NavigationBar from "../../components/NavigationBar";
import LineGroup1 from "../../components/track-record/LineGroup1";
import LineGroup2 from "../../components/track-record/LineGroup2";
import LineGroup3 from "../../components/track-record/LineGroup3";

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
        </div>
    )
}

export default TrackRecordPage;