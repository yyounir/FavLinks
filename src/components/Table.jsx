import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash, faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Table(props) {

  let handleRemoveChange = (event) => {
    props.removeLink(event.target.value)
  }

  let rows = props.links.map((data, index) => {
    
    return(
      <div className="w-fill text-left text-black dark:text-white bg-white dark:bg-gray-900 rounded-lg px-6 py-4 my-2 ring shadow-xl ring-gray-900/5"><a href={"https://" + data.URL} target="_blank" >
        {data.name}
        <br/>
        {data.URL}
        <br/><br/>
        {/* <tr>
          <td>{data.name}</td>
          <td>{data.URL}</td>
        </tr> */}
        
      </a>
      <button className='bg-red-500 text-white' onClick={() => props.removeLink(index)}><FontAwesomeIcon icon={faXmark} className='mr-1'/>Delete</button>
      </div>
    )
}

  return(
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Link Name</th>
    //       <th>Link URL</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {rows}
    //   </tbody>
    // </table>
    <div class="w-fill text-left bg-white dark:bg-gray-800 rounded-lg px-6 py-4 my-2 ring shadow-xl ring-gray-900/5">
      {rows}
    </div>
    

    return(
        <table>
            <TableHeader />
            <TableBody linkData={props.data} removeLink={handleRemove}/>
        </table>
    )
}

export default Table