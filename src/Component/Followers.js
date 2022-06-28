import React,{useEffect,useState} from "react";

const Followers=()=>{

    const[followi,setFollowi]=useState([])
    useEffect(()=>{
      follow()
    },[])
  
    
    const follow=()=>{
      fetch('https://new-api.coco.gl/dashboard/intw/top/followers')
     .then(res=>res.json())
     .then(json=>{
      console.log("Follow",json);
      setFollowi(json)
     })
  }
  return(
    <div>
        {followi.map((i,index)=>{
            return(
                <div key={i.instagramId} id={index}>{i.category} </div>
            )
        })}
<p> </p>
    </div>
  )
}
export default Followers;