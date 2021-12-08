import React from "react";
import "../components/TopNavigation.css";
import { Link } from "react-router-dom";

function TopNavigation() {
  return(
    <div>
      <navleft>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/love-language">LOVE.LANGUAGE</Link></li>
        <li><Link to="/frequent-words">FREQUENT.WORDS</Link></li>
        <li><Link to="/happy-birthday">HAPPY.BIRTHDAY</Link></li>
        <li><Link to="/track-record">TRACK.RECORD</Link></li>
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