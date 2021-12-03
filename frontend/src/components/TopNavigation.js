import React from "react";
import "../components/TopNavigation.css";


function TopNavigation() {
  return(
    <div>
      <navleft>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a  href="love-language">LOVE.LANGUAGE</a></li>
        <li><a href="frequent-words">FREQUENT.WORDS</a></li>
        <li><a href="happy-birthday">HAPPY.BIRTHDAY</a></li>
        <li><a href="track-record">TRACK.RECORD</a></li>
      </ul>
      </navleft>
        
      <navright>
        <ul>
          <li><a href="https://projectuploaded.cargo.site">MAKING OF</a></li>
          <li><a href="https://carmenyeh.com">BACK TO PORTFOLIO</a></li>
        </ul>
      </navright>
    </div>
  )
}

export default TopNavigation;