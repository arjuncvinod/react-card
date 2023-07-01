import React from "react";
import Card from "./card"
import Contacts from "../contacts"
import Avatar from "./Avatar"

function createCard(contact){
  return <Card 
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />
}
function App() {
        return (
          <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://media.licdn.com/dms/image/D5603AQH-tDqtkytzxg/profile-displayphoto-shrink_800_800/0/1670577127018?e=2147483647&v=beta&t=KGgRvJs_CvoY8v6UYbGejg6nr6RmrjoMt5eyuuPAwWg" />
            
            {Contacts.map(createCard)}
  
          </div>
        );

  
}

export default App;
