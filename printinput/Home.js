import { useState } from "react"

function Home()
{
      const [inputvalue,setvalue] = useState('')
      const[printvalue,setprintvalue]  = useState('')
      function changevalue (e){
        setvalue(e.target.value)
      }
    function print()
    {
        // document.write(inputvalue)
        setprintvalue(inputvalue)
        console.log(inputvalue)
    }
    return(
        <>
        <input type="text" onChange={changevalue} placeholder="type something" value={inputvalue}/>
        <button onClick={print}> click me</button>
        <p>{printvalue.split('').reverse('').join('')}</p>
        </>
    )
}
 export default  Home