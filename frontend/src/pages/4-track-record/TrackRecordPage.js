import React, { useEffect } from "react";
import LineGroup1 from "../../components/4-track-record/LineGroup1";
import LineGroup2 from "../../components/4-track-record/LineGroup2";
import LineGroup3 from "../../components/4-track-record/LineGroup3";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/4-track-record/trackrecord.css";
import TopNavigation from "../../components/TopNavigation";

function TrackRecordPage() {

    useEffect(() => {window.scrollTo(0,0)});

    return(
        
         <div id='background-blue'>

            <div id = "trackrecord">
            <TopNavigation/>
            <h1>
                TRACK.RECORD
            </h1>
            <p>TRACK.RECORD explores 3 different personal friendships through sentiment (emotional) analysis of messages exchanged between each of them. The wider the line, the happier the message content is.</p>
            {/* <div id = "codepoem">
                <p>  time (2011 + 10) </p>
                <p> sentiment.value,time, change; </p>
                <p> high.low.middle() &#123;</p>
                <p> ////t on e of   vo i  ce if (communication.digitalised) </p>  perceived.emotions = 100% performed.emotions = 300%        
                <p> print(record.of.relationship) </p>
            </div> */}
            
            <div style={{display: 'flex', justifyContent: "space-evenly", position: "relative"}}>
                <LineGroup1 />
                <LineGroup2 />
                <LineGroup3 />
            </div>

            <BottomNavigation colour="blue"/>

            <div id= "footer">  
                <p2> UP.LOADED - Carmen Yeh 2021 </p2>
            </div>
            </div>
         </div>

    )
}

export default TrackRecordPage;