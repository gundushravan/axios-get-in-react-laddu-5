import React,{useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [data,setState] = useState([])
  useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/todos').then(
        response => setState(response.data)
       )
  })
  return (
    <div>
       {data.map(eachItem =>
        <li key={eachItem.id}>{eachItem.title}</li>)}
    </div>
  );
}

export default App;
