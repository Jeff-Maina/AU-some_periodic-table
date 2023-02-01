import React from "react";
import '../styles/elementCard.css'

function ElementCard({selectedElement}) {
    return ( 
       <div id="singleCard">
              <h1 id="selectedAtomicNumber">{selectedElement.atomicNumber}</h1>
              <h1 style={{color: `#${selectedElement.cpkHexColor}`}} id="selectedElementSymbol">{selectedElement.symbol}</h1>
              <h5 id="selectedName">{selectedElement.name}</h5>
              <h4 id="selectedAtomicMass">{selectedElement.atomicMass}</h4>
              <span id="gp">
                     <span><h3 id="groupText">group:</h3><h2>{selectedElement.group}</h2></span>
                     <span><h3>period:</h3><h2>{selectedElement.period}</h2></span>
              </span>
              <span id= "mol-structure"><img src="../images/chemistry.png" alt =''/></span>
       </div>
     );
}

export default ElementCard;