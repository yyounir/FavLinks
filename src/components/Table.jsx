function Table(props) {

  let rows = props.links.map((data) => {
    return(
      <div  class="w-fill text-left bg-white dark:bg-gray-900 rounded-lg px-6 py-4 my-2 ring shadow-xl ring-gray-900/5">
        <a href={"https://" + data.URL}>{data.name}
        <br/>
        {data.URL}</a>

        {/* <tr>
          <td>{data.name}</td>
          <td>{data.URL}</td>
        </tr> */}
      </div>
    )
  })

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
    <div class="w-fill text-left bg-white dark:bg-gray-800 rounded-lg px-6 py-4 my-2 ring shadow-xl ring-gray-900/5">{rows}</div>
    

    
  )
}

export default Table