import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`;

const HappyBirthdayText = styled.div`
  text-align: center;
  color: white;
`;

const Bounce = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

function BirthdayDot({paddingLeft = 0, divSize = 80, verticalSpace = 0}) {

    const [active, setActive] = useState(false);

    return (
        <div onMouseEnter={() => {setActive(true)}} style={{
          display:'flex', 
          height:(divSize/2), 
          width: divSize, 
          marginLeft: (paddingLeft + 'vw'), 
          justifyContent:'center',
          marginTop: (verticalSpace + 'vh')}}>
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