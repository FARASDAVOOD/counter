
import './app.css'
import {useState} from 'react'
function App() {
  const [count,setCount]=useState(0)

let addCount= ()=>{
  setCount(count+1)
   console.log(count);
}
  return (
     <div className="App">
      <button onClick={addCount}>Add</button>
      <h1>Counter {count}</h1>
     </div>
   ) ;
   
  


  }

export default App;


