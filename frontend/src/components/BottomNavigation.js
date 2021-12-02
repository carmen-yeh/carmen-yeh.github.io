import React from "react";
import {Link} from "react-router-dom"
import {Card, CardContent} from "@mui/material";
import styled from "styled-components";


const Box = styled.button`
    border-width: 1.8px;
    border-color: white;
    border-style: solid;
    background-color: transparent;
    :hover {
        background-color: #2a151a;
    }
    transition: background-color 0.1s linear;
    height: 75px;
    width: 260px;
    margin-top: 20px;
align-content: center;
`;
const Text = styled.div`
    text-align:center;
    color: white;
    font-family: 'Menlo', 'Courier New', monospace;
    font-size: 1.1rem;
background-color: transparent;
`;

function Button({text, link}) {
    return(
        <Link to={link}>
            <Box>
                <Text>{text}</Text>
            </Box>
        </Link>
    )
}

function BottomNavigation() {

    return(
        <div style={{display: 'block', justifyContent:'center', paddingTop: 200, paddingBottom: 200}}>
            <Card style={{width: '280px', backgroundColor: "transparent"}}>
                <CardContent>
                    <Button text={"LOVE.LANGUAGE"} link={"/love-language"} />
                    <Button text={"FREQUENT.WORDS"} link={"/frequent-words"} />
                    <Button text={"HAPPY.BIRTHDAY"} link={"/happy-birthday"} />
                    <Button text={"TRACK.RECORD"} link={"/track-record"} />
                </CardContent>
            </Card>
        </div>
    )
}


export default BottomNavigation;