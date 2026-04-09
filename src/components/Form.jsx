import { useState } from "react";

function Form(props) {
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    const handleNameChange = () => {
        console.log(event.target)
        setName(event.target.value)
    }

    const handleURLChange = () => {
        console.log(event.target)
        setURL(event.target.value)
        // props.submitNewLink(name, url)
    }


    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            console.log(name, URL);

            props.submitNewLink({name, URL})
            
        }}>
            <label for="linkname">Website name:</label><br/>
            <input type="text" id="linkname" name="linkname" placeholder="Website name" onChange={handleNameChange} />
            <br/><br/>
            <label for="url">URL:</label><br/>
            <input type="text" id="url" name="url" placeholder="URL" onChange={handleURLChange}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form> 
    )
}

export default Form