// import { Start } from "@mui/icons-material"
import { Start } from "@mui/icons-material";
import {useState} from "react"
function Home()
{
const [second,setsecond] = useState(0)
const [minute,setminute] = useState(0)
const[hour,sethour] = useState(0)

let j=1
function start()
{let i=0 
   
   
   
    let clear =   setInterval(() => {
        setsecond((second)=>second+1)

        console.log("hello")
        
    },1000);
    console.log(second)
    

}

    return(
        <>
        <h1 id="timer"  >{hour}:{minute}:{second}</h1>

    <button id="start"  onClick={start} >Start</button>
    <button id="stop" onClick={stop}>Stop</button>
    <button id="pause">Pause</button>
    </>
    )
}
export default H