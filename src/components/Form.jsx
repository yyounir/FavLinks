import {useState} from "react";

function Form(props) {
    // function handleSubmit(event) {
    //   event.preventDefault();
    //   alert("submitted!");
    // }

    const [name, setName] = useState(""); 
    const [URL, setURL]  = useState("");

    let handleSubmit = (event) => {
      event.preventDefault();
      if(name==="" || URL==="") {
        alert("pls enter something lol");
      }
      else {
        console.log(name,URL);
        props.onNewSubmit({name, URL})
        setName('')
        setURL('')
        // alert("Submitted through arrow function!");
      }
      console.log(name);
      console.log(URL);
    }

    let handleNameChange = (event) => {
      // console.log(event.target.value)
      setName(event.target.value);
    }
    let handleURLChange = (event) => {
      setURL(event.target.value);
    }
  



    return(
      <form onSubmit={handleSubmit} className="container">
        
        <h1 class="testClass" className="font-bold">Submit your fav links!</h1>
        <br />
        <label for="linkName">Type a name: </label>
        <input type="text" id="linkName" name="linkName" onChange={handleNameChange} value={name} className="inputText"/> 
        <br />
        <label for="linkURL">Type the URL: </label>
        <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange} value={URL} className="inputText"/>
        
        <br/><br/>
        <button type="submit" disabled={name === "" || URL === ""}>Submit</button>
        <br/>
      </form>
    )
  }

export default Form