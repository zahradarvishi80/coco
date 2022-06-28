import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Engaded=()=>{
    const[engage,setEngage]=useState([])

    useEffect(()=>{
        const engaged=()=>{
            fetch('https://new-api.coco.gl/dashboard/intw/top/engaged')
           .then(res=>res.json())
           .then(json=>{
            console.log("json",json);
            setEngage(json)
        
           })
        }
        engaged()
      },[])
    return(
      <div style={{width:"50%",height:200,backgroundColor:"orange"}}>
             {engage.map((item,index)=>{
              return(
                <div key={item.instagramId} id={index}>
                      <nav>
            <Link to={`Details/${item.instagramId}`}>
                  <p key={item}>{item.fullName} </p>
                  <p>followerCount={item.followerCount} </p>
                  <p>followingCount={item.followingCount} </p>
                  <p>instagramId={item.instagramId}</p>
                  <p>avgComment={item.avgComment}</p>
                  <p>totalPost={item.totalPost}</p>
                  <p>category={item.category}</p>
                  <img alt="profile" src={item.profilePic}/>
                  </Link>
                  </nav>
                </div>
              )
             })}
            </div>
    )
}
export default Engaded