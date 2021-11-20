import React from "react";
import {useNavigate} from "react-router-dom"
import {Button, Card, CardContent} from "@mui/material";

function NavigationBar() {
    const navigate = useNavigate();

    return(
        <div>
            <Card>
                <CardContent>
                    <div style={{display:'flex', justifyContent: "space-evenly"}}>
                        <Button onClick={() => (navigate("/"))} variant = 'outlined' color='primary'>
                            Home
                        </Button>
                        <Button onClick={() => (navigate("/about"))} variant = 'outlined' color='primary'>
                            About
                        </Button>
                        <Button onClick={() => (navigate("/love-language"))} variant = 'outlined' color='primary'>
                            1 - Love Languages
                        </Button>
                        <Button onClick={() => (navigate("/frequent-words"))} variant = 'outlined' color='primary'>
                            2 - Frequent Words
                        </Button>
                        <Button onClick={() => (navigate("/happy-birthday"))} variant = 'outlined' color='primary'>
                            3 - Happy Birthday
                        </Button>
                        <Button onClick={() => (navigate("/track-record"))} variant = 'outlined' color='primary'>
                            4 - Track Record
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NavigationBar;