import React from "react";
import Line from "../../components/Line";
import NavigationBar from "../../components/NavigationBar";

function TrackRecordPage() {

    return(
        <div>
            <h1>
                Here is my track record
            </h1>
            <NavigationBar />
            <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                <div>
                    <Line length={400}/>
                    <Line length={300}/>
                    <Line length={350}/>
                    <Line length={250}/>
                    <Line length={300}/>
                    <Line length={200}/>
                    <Line length={400}/>
                </div>
                <div>
                    <Line length={400}/>
                    <Line length={300}/>
                    <Line length={350}/>
                    <Line length={250}/>
                    <Line length={300}/>
                    <Line length={200}/>
                    <Line length={400}/>
                </div>
                <div>
                    <Line length={400}/>
                    <Line length={300}/>
                    <Line length={350}/>
                    <Line length={250}/>
                    <Line length={300}/>
                    <Line length={200}/>
                    <Line length={400}/>
                </div>
            </div>
        </div>
    )
}

export default TrackRecordPage;