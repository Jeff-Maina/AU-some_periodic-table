import React, { useState } from "react";
import "../styles/elementCard.css";
import { NavLink } from "react-router-dom";

function ElementCard({ selectedElement }) {
  const [definedName, setDefinedName] = useState("-");
  const [description, setDescription] = useState("");

  function evaluateDescription(value) {
    setDefinedName(value);
    if (value === "Chemical Family") {
      setDescription(
        " A group of elements that have certain similar properties and can form compounds with some similar properties"
      );
//       y2k
    }
    if (value === "Bonding Type") {
      setDescription("The formation of a chemical bond between two or more atoms, molecules, or ions to give rise to a chemical compound. ");
    }
    if (value === "Atomic radius") {
      setDescription('The total distance from an atom\'s nucleus to the outermost orbital of electron.');
    }
    if (value === "Boiling point") {
      setDescription('Temperature at which the pressure exerted by the surroundings upon a liquid is equaled by the pressure exerted by the vapour of the liquid');
    }
    if (value === "Melting point") {
      setDescription('Temperature at which the solid and liquid forms of a pure substance can exist in equilibrium');
    }
    if (value === "Standard state") {
      setDescription('The most stable form of that substance at a pressure of one bar');
    }
    if (value === "Oxidation state") {
      setDescription('Oxidation state, also called oxidation number, the total number of electrons that an atom either gains or loses in order to form a chemical bond with another atom');
    }
    if (value === "Electron affinity") {
      setDescription('The amount of energy liberated when an electron is added to a neutral atom to form a negatively charged ion.');
    }
    if (value === "Ionization energy") {
      setDescription('A measure of the difficulty in removing an electron from an atom or ion or the tendency of an atom or ion to surrender an electron.');
    }
    if (value === "Electron negativity") {
      setDescription('A chemical property that describes the power of an atom in a molecule to attract shared-pair electrons towards itself.');
    }
    if (value === "Van der Waals radius") {
      setDescription('A measure for the size of an atom that is not chemically (ionically or covalently) bound.');
    }
    if (value === "Electronic configuration") {
      setDescription('The arrangement of electrons in orbitals around an atomic nucleus.');
    }
  }

  return (
    <>
    <div id="instruction">
       <div>
        <h6>not sure what a term means? just click it!</h6>
       </div>
    </div>
      <NavLink exact to="/">
        <div id="back-button" draggable="false">
          <div id="barium">
            <h5>
              <sup>1</sup>Ba
            </h5>
            <h6>137.327</h6>
          </div>
          <div id="carbon">
            <h5>
              <sup>6</sup>C
            </h5>
            <h6>12.0107</h6>
          </div>
          <div id="potassium">
            <h5>
              <sup>19</sup>K
            </h5>
            <h6>39.0983</h6>
          </div>
        </div>
      </NavLink>
      <div id="singleCard">
        <div
          style={{ borderColor: `#${selectedElement.cpkHexColor}` }}
          id="border-box"
        >
          <h1 id="selectedAtomicNumber">{selectedElement.atomicNumber}</h1>
          <h1
            style={{ color: `#${selectedElement.cpkHexColor}` }}
            id="selectedElementSymbol"
          >
            {selectedElement.symbol}
          </h1>
          <h5
            style={{ color: `#${selectedElement.cpkHexColor}` }}
            id="selectedName"
          >
            {selectedElement.name}
          </h5>
          <h4 id="selectedAtomicMass">{selectedElement.atomicMass}</h4>
          <span id="gp">
            <span>
              <h3 id="groupText">group:</h3>
              <h2>{selectedElement.group}</h2>
            </span>
            <span>
              <h3>period:</h3>
              <h2>{selectedElement.period}</h2>
            </span>
          </span>
          <div id="details">
            <span id="family">
              <h3
                onClick={() => {
                  evaluateDescription("Chemical Family");
                }}
              >
                Chemical family:{" "}
              </h3>
              <h2>{selectedElement.groupBlock}</h2>
            </span>
            <span id="bonging-type">
              <h3
                onClick={() => {
                  evaluateDescription("Bonding Type");
                }}
              >
                Bonding type:{" "}
              </h3>
              <h2>{selectedElement.bondingType}</h2>
            </span>
            <span id="mol-structure">
              <h3
                onClick={() => {
                  evaluateDescription("Atomic radius");
                }}
              >
                Atomic radius:{" "}
              </h3>
              <h2>{selectedElement.atomicRadius}</h2>
            </span>
            <span id="boiling-point">
              <h3
                onClick={() => {
                  evaluateDescription("Boiling point");
                }}
              >
                Boiling point:{" "}
              </h3>
              <h2 style={{ color: "red" }}>
                {selectedElement.boilingPoint}&#176;c
              </h2>
            </span>
            <span id="melting-point">
              <h3
                onClick={() => {
                  evaluateDescription("Melting point");
                }}
              >
                Melting point:{" "}
              </h3>
              <h2 style={{ color: "blue" }}>
                {selectedElement.meltingPoint}&#176;c
              </h2>
            </span>
            <span id="state">
              <h3
                onClick={() => {
                  evaluateDescription("Standard state");
                }}
              >
                Standard state:{" "}
              </h3>
              <h2>{selectedElement.standardState}</h2>
            </span>
            <span id="oxidation-states">
              <h3
                onClick={() => {
                  evaluateDescription("Oxidation state");
                }}
              >
                Oxidation states:{" "}
              </h3>
              <h2>{selectedElement.oxidationStates}</h2>
            </span>
            <span id="electron-affinity">
              <h3
                onClick={() => {
                  evaluateDescription("Electron affinity");
                }}
              >
                Electron affinity:{" "}
              </h3>
              <h2>{selectedElement.electronAffinity}</h2>
            </span>
            <span id="ionization-energy">
              <h3
                onClick={() => {
                  evaluateDescription("Ionization energy");
                }}
              >
                Ionization energy:{" "}
              </h3>
              <h2>{selectedElement.ionizationEnergy} kJ/mol</h2>
            </span>
            <span id="ionization-energy">
              <h3
                onClick={() => {
                  evaluateDescription("Electron negativity");
                }}
              >
                Electron negativity:{" "}
              </h3>
              <h2>{selectedElement.electronegativity}</h2>
            </span>
            <span id="vanDerWaalsRadius">
              <h3
                onClick={() => {
                  evaluateDescription("Van der Waals radius");
                }}
              >
                Van der waals radius
              </h3>
              <h2>{selectedElement.vanDerWaalsRadius}</h2>
            </span>
            <span id="configuration">
              <h3
                onClick={() => {
                  evaluateDescription("Electronic configuration");
                }}
              >
                Electronic configuration
              </h3>
              <h2>{selectedElement.electronicConfiguration}</h2>
            </span>
          </div>
        </div>
      </div>
      <div id="definition-container">
        <div id="box-border">
          <h2 id="definition">Definition</h2>
          <h2 id="word">{definedName}</h2>
          <p id="actual-definition">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ElementCard;
