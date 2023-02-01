import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/table.css";
import Loader from "./loader";

function Table({ transferData }) {
  const [elements, setElements] = useState([]);
  const [elementsLowerGrid, setElementsLowerGrid] = useState([]);
  const[elementName,setElementname] = useState('Hydrogen');
  const [elementColor,setElementColor] = useState('#ad8e70')
  const [elementSymbol,setElementSymbol] = useState('H')
  const [atomicNumber,setAtomicNumber] = useState(1)
  const [atomicMass,setAtomicMass] = useState(1.00794)
  const[symbolColor,setSymbolColor] = useState('#FFFFFF')
  const[pending,setPending] = useState(true)
  


  useEffect(() => {
    fetch("https://api.npoint.io/de68b6bf88b29ffe56f5")
      .then((response) => response.json())
      .then((data) => {
        setElements(data);
        setPending(false)
        console.log(data);
      });
  }, []);


  //change demo datails

  function handleHover(data){
  setElementSymbol(data.symbol)
  setAtomicNumber(data.atomicNumber)
  setAtomicMass(data.atomicMass)
  setElementname(data.name)

  if(data.groupBlock === 'actinoid'){
    console.log(data.groupBlock);
    setElementColor('rgb(99, 58, 8)')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'lanthanoid'){
    setElementColor('#ad8b73')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'noble gas'){
    setElementColor('#d67d3e')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'halogen'){
    setElementColor('#d6e4e5')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'alkali metal'){
    setElementColor('#6d502d')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'alkaline earth metal'){
    setElementColor('#efb186')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'nonmetal'){
    setElementColor('#ad8e70')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'metalloid'){
    setElementColor('#e5ba73')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'metal'){
    setElementColor('#e5ba73')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  else if(data.groupBlock === 'transition metal'){
    setElementColor('pink')
    setSymbolColor(`#${data.cpkHexColor}`)
  }
  }

  // Helium and Hydrogen

  let hydrogen = elements.filter((eleme)=>{
    return(eleme.name === 'Hydrogen')
  })

  let hydrogenCard = hydrogen.map((elem,index)=>{
    return(
      <NavLink
      onMouseOver={()=>{
        handleHover(elem)
      }}
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
    )
  })


  let helium = elements.filter((eleme)=>{
    return(eleme.name === 'Helium')
  })

  let heliumCard = helium.map((elem,index)=>{
    return(
      <NavLink
      onMouseOver={()=>{
        handleHover(elem)
      }}
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
    )
  })


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
      onMouseOver={()=>{
        handleHover(elem)
      }}
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
      onMouseOver={()=>{
        handleHover(elem)
      }}
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
        onMouseOver={()=>{
          handleHover(elem)
        }}
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
      <NavLink id="navLink" to="/card" draggable={false} onMouseOver={()=>{
        handleHover(elem)
      }}>
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
      onMouseOver={()=>{
        handleHover(elem)
      }}
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
    "halogens"
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

  //No!! forgot all about hydrogen and Helium

  return (
    <div id="table">
      {pending && <Loader/>}
      {pending || <><div id="table-header">
          <h3>The Periodic Table of Elements</h3>
      </div>
      <div id="vertical-numbers">
         <h2>1</h2>
         <h2>2</h2>
         <h2>3</h2>
         <h2>4</h2>
         <h2>5</h2>
         <h2>6</h2>
         <h2>7</h2>
      </div>
      <div id="group-numbers1">
        <h2>I</h2>
        <h2 id="g2">II</h2>
      </div>
      <div id="he">
        {hydrogenCard}
        {heliumCard}
      </div>
      <div id="topSection">
        <div id="left-side">{leftSectionList}</div>
        <div id="transition-metals">
          <div style={{backgroundColor: elementColor}} id="demo">
              <span id="atomic-number-span"><h5>{atomicNumber}</h5><hr/><h6>atomic number</h6></span>
              <span id="chemical-symbol-span"><h4 style={{color:symbolColor}}>{elementSymbol}</h4><hr/><h6>chemical symbol</h6></span>
              <span id="atomic-mass-span"><h4>{atomicMass}</h4><hr/><h6>atomic mass</h6></span>
          </div>
          <div id="elementdemoName">
             <h3>{elementName}</h3>
          </div>
          <div id="groupNumbers">
            <h2>III</h2>
            <h2>IV</h2>
            <h2>V</h2>
            <h2>VI</h2>
            <h2>VII</h2>
            <h2>VII</h2>
            <h2>IX</h2>
            <h2>X</h2>
            <h2>XI</h2>
            <h2>XII</h2>
          </div>
        </div>
        {/* y2k */}
        <div id="group-numbers3">
          <h2>XIII</h2>
          <h2>XIV</h2>
          <h2>XV</h2>
          <h2>XVI</h2>
          <h2 id="g17">XVII</h2>
          <h2 id="g18">XVIII</h2>
        </div>
        <div id="right-side">
          {rightSectionList}
          </div>
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
      </>}
    </div>
  );
}

export default Table;
