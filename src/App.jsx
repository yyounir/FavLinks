// Form, Table, some js to push data from the form to the table

import "./App.css"

import Table from "./components/table"
import Form from "./components/Form"

import {useState} from "react";

// Create an app component to render as our main component

function App() { // Capitalize component names

  const [favLinks, setFavLinks] = useState([])

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])
  }

  // All components must return some JSX -- thats it
  return (
    <div>

      <Form onNewSubmit = {handleNewSubmission} />
      <Table links={favLinks} />
      
    </div>
  )
}

export default App