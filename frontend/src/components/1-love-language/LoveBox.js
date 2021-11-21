import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const Filled = styled.div`
    border-width: 2px;
    border-color: white;
    border-style: solid;
    height: 75px;
    width: 75px;
    background-color: white;
    margin-left: 0;
`;
const Opened = styled.div`
    border-width: 2px;
    border-color: white;
    border-style: solid;
    height: 75px;
    width: 75px;
    margin-left: 0;
`;
const BoxText = styled.div`
    text-align: center;
    padding: 5px;
    font-size: 15px;
    margin-left: 0;
`;
const FadeIn = styled.div`
    animation: 0.5s ${keyframes`${fadeIn}`};
`;

function Box({text}) {
    return (
        <div>
            <Opened>
                <BoxText>{text}</BoxText>
            </Opened>
        </div>
    )
}

function LoveBox({paddingLeft = 0, text = "Love You"}) {

    const [active, setActive] = useState(false);

    return(
        <div onMouseEnter={() => {setActive(true)}} style={{marginLeft: (paddingLeft + 'vw')}}>
            {active ? (
                <FadeIn>
                    <Box text={text} />
                </FadeIn>
            ) : (
                <Filled />
            )}
        </div>
    )
}

export default LoveBox;