import { useState } from 'react';
function Getcount(){
    
let [count,setcount] = useState(0)
    function incr()
    {
      setcount(count+1)
    } 
    function decr(){
      setcount(count-1)
    }
return(
    <>
  <h1>counter</h1>
  {/* <getcount/> */}
  <p>{count}</p>
  <button onClick={incr}>incr</button>
  
  <button onClick={decr}>decr</button>
  </>
)  
}
export default Getcount
