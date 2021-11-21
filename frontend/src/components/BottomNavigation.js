import React from "react";
import {Link} from "react-router-dom"
import {Card, CardContent} from "@mui/material";
import styled from "styled-components";

const Box = styled.button`
    border-width: 2px;
    border-color: white;
    border-style: solid;
    background-color: transparent;
    :hover {
        background-color: #2a151a;
    }
    transition: background-color 0.2s linear;
    height: 75px;
    width: 15vw;
    margin-left: 0;
    margin-top: 10px;
`;
const Text = styled.div`
    text-align:center;
    color: white;
    font-family: 'Menlo', 'Courier New', monospace;
    font-size: 1.25vw;
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
        <div style={{display: 'flex', justifyContent:'center'}}>
            <Card style={{width: '20vw', backgroundColor: "#0000"}}>
                <CardContent>
                    {/* <Button text={"HOME"} link={"/"} />
                    <Button text={"ABOUT"} link={"/about"} /> */}
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