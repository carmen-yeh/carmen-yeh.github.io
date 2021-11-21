import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
`;

const HappyBirthdayText = styled.div`
  text-align: center;
  color: black;
`;

const Bounce = styled.div`
  animation: 1.5s ${keyframes`${bounceIn}`};
`;

function BirthdayDot({paddingLeft = 0, divSize = 80}) {

    const [active, setActive] = useState(false);

    return (
        <div onMouseEnter={() => {setActive(true)}} style={{display:'flex', height:(divSize/2), width: divSize, marginLeft: (paddingLeft + 'vw'), justifyContent:'center'}}>
            {active ? (
                <Bounce>
                    <HappyBirthdayText>Happy Birthday!</HappyBirthdayText>
                </Bounce>
            ) : (
                <Dot style={{marginTop:10}}/>
            )}
        </div>
    )
}

export default BirthdayDot;