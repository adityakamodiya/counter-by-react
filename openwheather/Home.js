import axios from "axios"
import { useState } from "react"
function Home()
{
const [inputvalue,setinputvalue] = useState('')
const [city,setcityvalue] = useState('')
 const [maxtemp,setmaxtempvalue]  = useState('')
 const [mintemp,setmintempvalue]  = useState('')
 const[printvalue,setprintvalue]  = useState('')    

   
    function changevalue (e){
        setinputvalue(e.target.value)
      }
    function print()
    {
        // document.write(inputvalue)
        setprintvalue(inputvalue)
        console.log(inputvalue)
        // console.log(printvalue.split('').reverse('').join(''))
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+inputvalue+"&appid=1cbd1d9dfd836ef0b9fb4c69d62f1bfd")
        .then((Response)=>{console.log(Response.data)
        setmaxtempvalue(Response.data.main.temp_max)
        setmintempvalue(Response.data.main.temp_min)
        setcityvalue(Response.data.name)
        })
    }
    return(
        <>
        <h1>Get weather</h1>
        <div>
            
        <input type="text" onChange={changevalue} placeholder="type something" value={inputvalue}/>
            <button onClick={print}>get data</button>
            <div className="data">
                <h1>city:{city}</h1>
                <p>minimum tempture:{mintemp}</p> 
                <p>maximum tempture:{maxtemp}</p>
            </div>
        </div>
        </>
    )
}
export default Home