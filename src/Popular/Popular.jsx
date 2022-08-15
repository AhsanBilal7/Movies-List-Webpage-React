import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'
import './Popular.css'
import axios from 'axios'
function Popular(props) {
 const apii = props.value;
 console.log(apii)
   const [number , setnumber] = useState(5)
    const [data , setdata] = useState([])
    const click = ()=>{
      setnumber(prev=>{return prev+5});
    }
    useEffect(()=>{
        fetch(apii).then(response=>{
          
          return  response.json();
        }).then(file=>{
            
            return setdata(file.results)
        })
    },[props.value])
    console.log(data)
    
     
  return (
    <>
<h1>{props.text}</h1>
<br/>
    <div className='popclass'>
   {  data.map(
    (result,index) => {
    const {original_title ,poster_path,overview } = result;

    return(
    <div className='popitem' >

{(index < number) ? <Cards overview = {overview} title = {original_title} path = {poster_path}/> :  console.log(index)}

    </div>

    ) 
    })}
    </div>

    <div className='morebutton'><button onClick={click}>Show More</button> </div>
    
    </>

  )

}

export default Popular