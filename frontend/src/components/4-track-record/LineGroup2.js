import React from 'react';
import Line from './Line';

function LineGroup2() {

    // EDIT THIS ARRAY WITH LENGTHS
    // use length 0 to add break line
    const lengths = [100, 200, 350, 650, 0, 300, 100, 500];

    function loopLines(lengths = []) {

        let lines = [];
        for (let i = 0; i < lengths.length; i++) {
            if (lengths[i] == 0) {
                lines.push(<br />);
            }
            else {
                lines.push(<Line length={lengths[i]} />);
            }
        }
        return lines;
    }

    return(
        <div>
            {loopLines(lengths)}
        </div>
    )
}

export default LineGroup2;