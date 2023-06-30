import React from "react";
import Card from "./card"
import Contact from "../contacts"


function App() {
        return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Card name={Contact[0].name} img={Contact[0].imgURL} tel={Contact[0].phone} email={Contact[0].email}/>
    <Card name={Contact[1].name} img={Contact[1].imgURL} tel={Contact[1].phone} email={Contact[1].email}/>
    <Card name={Contact[2].name} img={Contact[2].imgURL} tel={Contact[2].phone} email={Contact[2].email}/>
    
    </div>
  );

  
}

export default App;
