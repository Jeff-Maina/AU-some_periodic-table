import { useState } from "react";
import { Switch,Route } from "react-router-dom";
import "./App.css";
import ElementCard from "./components/elementCard";
import Logo from "./components/logo";
import Table from "./components/table";

function App() {
  const[selectedElement,setElement] = useState([])

function transferData(data){
 console.log(data);
 setElement(data);
}

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/'>
          <Table transferData={transferData}/>
        </Route>
        <Route path = '/card'>
           <ElementCard selectedElement = {selectedElement}/>
        </Route>
      </Switch>
      <Logo/>
    </div>
  );
}

export default App;
