import React from "react";
import NavigationBar from "../../components/NavigationBar";
import LineGroup1 from "../../components/4-track-record/LineGroup1";
import LineGroup2 from "../../components/4-track-record/LineGroup2";
import LineGroup3 from "../../components/4-track-record/LineGroup3";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/4-track-record/TrackRecord.css";

function TrackRecordPage() {

    return(
        <div id = "trackrecord">
            <NavigationBar />
            <h1>
                TRACK.RECORD
            </h1>
        <p>TRACK.RECORD explores 3 different personal friendships through sentiment (emotional) analysis of messages exchanged between each of them. The wider the line, the happier the message content is.</p>
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