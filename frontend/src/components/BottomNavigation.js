import React from "react";
import {Link} from "react-router-dom"
import {Card, CardContent} from "@mui/material";
import styled from "styled-components";


const BoxRed = styled.button`
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
const BoxBlue = styled.button`
    border-width: 1.8px;
    border-color: white;
    border-style: solid;
    background-color: transparent;
    :hover {
        background-color: #010336;
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

function Button({text, link, colour}) {
    if (colour === "red") {
        return(
            <Link to={link}>
                <BoxRed>
                    <Text>{text}</Text>
                </BoxRed>
            </Link>
        )
    }
    if (colour === "blue") {
        return(
            <Link to={link}>
                <BoxBlue>
                    <Text>{text}</Text>
                </BoxBlue>
            </Link>
        )
    }
}

function BottomNavigation({colour}) {

    return(
        <div style={{display: 'block', justifyContent:'center', paddingTop: 200, paddingBottom: 200}}>
            <Card style={{width: '280px', backgroundColor: "transparent"}}>
                <CardContent>
                    <Button text={"LOVE.LANGUAGE"} link={"/love-language"} colour={colour}/>
                    <Button text={"FREQUENT.WORDS"} link={"/frequent-words"} colour={colour}/>
                    <Button text={"HAPPY.BIRTHDAY"} link={"/happy-birthday"} colour={colour}/>
                    <Button text={"TRACK.RECORD"} link={"/track-record"} colour={colour}/>
                </CardContent>
            </Card>
        </div>
    )
}


export default BottomNavigation;