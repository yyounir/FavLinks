import LinkContainer from "./components/LinkContainer"

import "./App.css"

import Table from "./components/Table"
import Form from "./components/Form"

import {useState} from "react";

// Create an app component to render as our main component

function App() { // Capitalize component names

  const [favLinks, setFavLinks] = useState([])

  const removeLink = (index) => {
    // console.log("Cats will rule the world someday >:D");
    // favLinks[index].pop;
    setFavLinks(favLinks.filter((_, i) => i !== index));
  }

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])
  }

  // All components must return some JSX -- thats it
  return (
    <div>

      <Form onNewSubmit = {handleNewSubmission} />
      <Table links={favLinks} removeLink={removeLink} />
      
    </div>
  )
}

export default App