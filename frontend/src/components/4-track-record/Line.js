import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-width: 0;
  background-color: gray;
  :hover {
    background-color: white;
  }
  transition: background-color 0.2s linear;
`;

function Line({length = 100, height = 8}) {
    return (
        <div style={{display:'flex', width: '33vw', height: (height + 10), justifyContent: 'center'}}>
            <StyledDiv
                style={{
                    width: length,
                    height: height,
                    marginTop: 10
                }}
            />
        </div>
    );
}

export default Line;