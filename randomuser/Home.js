import axios from "axios"
import { useState } from "react"
import "./randomuser.css"
function Home()
    {
     const[photo,setphoto] = useState('')
     const[name,setname] = useState('')
     const[email,setemail] = useState('')
function getrandom(){
 console.log("hello")
 axios.get("https://randomuser.me/api")
 .then((response)=>{console.log(response.data.results)
    setphoto(response.data.results[0].picture.large)
 setname(response.data.results[0].name.first)
 setemail(response.data.results[0].email)
//  console.log(response.data.results[0].picture.large)
})
}

return(
<>
<div className="button">
<button onClick={getrandom}> get data</button></div>
<div>
<img src={photo}></img>
<h1>{name}</h1>
<h3>{email}</h3>
</div>
</>
    )
    
}
export default Home