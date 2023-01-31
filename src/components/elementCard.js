import React from "react";
import '../styles/elementCard.css'

function ElementCard({selectedElement}) {
    return ( 
       <div id="singleCard">
              <h6>{selectedElement.name}</h6>
       </div>
     );
}

export default ElementCard;