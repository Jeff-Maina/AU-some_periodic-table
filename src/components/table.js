import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/table.css";

function Table({ transferData }) {
  const [elements, setElements] = useState([]);
  const [elementsLowerGrid, setElementsLowerGrid] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/de68b6bf88b29ffe56f5")
      .then((response) => response.json())
      .then((data) => {
        setElements(data);
        console.log(data);
      });
  }, []);

  //left section elements

  let leftSectionElements = elements.filter((elem) => {
    return (
      elem.atomicNumber === 3 ||
      elem.atomicNumber === 4 ||
      elem.atomicNumber === 11 ||
      elem.atomicNumber === 12
    );
  });

  console.log(leftSectionElements);

  let leftSectionList = leftSectionElements.map((elem, index) => {
    return (
      <NavLink
        onClick={() => {
          transferData(elem);
        }}
        id="navLink"
        to="/card"
        draggable={false}
      >
        <div
          name={elem.name}
          className={elem.groupBlock}
          key={index}
          id="elementCard"
          draggable={false}
        >
          <h6 id="elementName">
            <sup>{elem.atomicNumber}</sup>
            {elem.symbol}
          </h6>
        </div>
      </NavLink>
    );
  });

  // right section elements

  let rightSectionElements = elements.filter((elem, index) => {
    return (
      elem.atomicNumber > 4 &&
      elem.atomicNumber < 19 &&
      elem.group !== 1 &&
      elem.group !== 2
    );
  });

  let rightSectionList = rightSectionElements.map((elem, index) => {
    return (
      <NavLink
        onClick={() => {
          transferData(elem);
        }}
        id="navLink"
        to="/card"
        draggable={false}
      >
        <div
          name={elem.name}
          className={elem.groupBlock}
          key={index}
          id="elementCard"
        >
          <h6 id="elementName">
            <sup>{elem.atomicNumber}</sup>
            {elem.symbol}
          </h6>
          <h6 id="atomicMass">{elem.atomicMass}</h6>
        </div>
      </NavLink>
    );
  });

  //   middle section elements

  let middleGrid = elements.filter((elem) => {
    return (
      (elem.atomicNumber > 18 && elem.atomicNumber <= 57) ||
      (elem.atomicNumber >= 72 && elem.atomicNumber <= 89) ||
      (elem.atomicNumber >= 104 && elem.atomicNumber <= 118)
    );
  });

  let middleElementsList = middleGrid.map((elem, index) => {
    return (
      <NavLink
        onClick={() => {
          transferData(elem);
        }}
        id="navLink"
        to="/card"
        draggable={false}
      >
        <div
          name={elem.name}
          className={elem.groupBlock}
          key={index}
          id="elementCard"
          draggable={false}
        >
          <h6 id="elementName">
            <sup>{elem.atomicNumber}</sup>
            {elem.symbol}
          </h6>
          <h6 id="atomicMass">{elem.atomicMass}</h6>
        </div>
      </NavLink>
    );
  });

  //   lanthanides section

  let lanthanides = elements.filter((elem) => {
    return elem.groupBlock === "lanthanoid";
  });

  let lanthanidesList = lanthanides.map((elem, index) => {
    return (
      <NavLink id="navLink" to="/card" draggable={false}>
        <div
          name={elem.name}
          className={elem.groupBlock}
          key={index}
          id="elementCard"
        >
          <h6 id="elementName">
            <sup>{elem.atomicNumber}</sup>
            {elem.symbol}
          </h6>
          <h6 id="atomicMass">{elem.atomicMass}</h6>
        </div>
      </NavLink>
    );
  });

  // actinides section

  let actinides = elements.filter((elem) => {
    return elem.groupBlock === "actinoid" || elem.atomicNumber === 103;
  });

  console.log(actinides);
  let actinoidList = actinides.map((elem, index) => {
    return (
      <NavLink
        onClick={() => {
          transferData(elem);
        }}
        id="navLink"
        to="/card"
        draggable={false}
      >
        <div
          name={elem.name}
          className={elem.groupBlock}
          key={index}
          id="elementCard"
        >
          <h6 id="elementName">
            <sup>{elem.atomicNumber}</sup>
            {elem.symbol}
          </h6>
          <h6 id="atomicMass">{elem.atomicMass}</h6>
        </div>
      </NavLink>
    );
  });

  //keys and what colors represent

  let blockGroups = [
    "Alkali metals",
    "Alkaline earth metals",
    "transitional metals",
    "metalloids",
    "Non-metals",
    "Noble gases",
    "Lanthanides",
    "Actinides",
  ];

  let keyList = blockGroups.map((blockgroup) => {
    console.log(blockgroup);
    return (
      <span id="keySpan">
        <div id={blockgroup} className="color"></div>
        <h6 id="color-rep">{blockgroup}</h6>
      </span>
    );
  });

  return (
    <div id="table">
      <div id="table-header">
          <h3>The Periodic Table of Elements</h3>
      </div>
      <div id="topSection">
        <div id="left-side">{leftSectionList}</div>
        <div id="transition-metals"></div>
        <div id="right-side">{rightSectionList}</div>
      </div>
      <div id="middleSection">{middleElementsList}</div>
      <span id="lanthanideSpan">
        <h5>lanthanides</h5>
        <div id="lanthanides-container">{lanthanidesList}</div>
      </span>
      <span id="actinideSpan">
        <h5>actinides</h5>
        <div id="actinide-container">{actinoidList}</div>
      </span>
      <div id="key-container">{keyList}</div>
    </div>
  );
}

export default Table;
