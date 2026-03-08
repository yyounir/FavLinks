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
      <form onSubmit={handleSubmit} class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        
        <h1 class="testClass" className="font-bold">Submit your fav links!</h1>
        <br />
        <label for="linkName">Type a name: </label>
        <input type="text" id="linkName" name="linkName" onChange={handleNameChange} value={name} class="bg-gray-200 rounded-lg pt-2 pb-2 pl-1 mb-1 dark:bg-gray-600"/> 
        <br />
        <label for="linkURL">Type the URL: </label>
        <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange} value={URL} class="bg-gray-200 rounded-lg pt-2 pb-2 pl-1 dark:bg-gray-600"/>
        
        <br/><br/>
        <button type="submit" disabled={name === "" || URL === ""} class="cursor-pointer bg-green-500 font-bold hover:bg-green-600 hover:px-6 text-black px-4 py-2 rounded-lg hover:cursor:pointer hover:duration-300 duration-300">Submit</button>
        <br/>
      </form>
    )
  }

export default Form