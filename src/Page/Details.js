import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"
const Details=()=>{
    const[insta,setInsta]=useState([])
    const {instagramId}=useParams()
    console.log("ppp",instagramId);
    useEffect(()=>{
        const instagramId1=()=>{
            fetch(`https://new-api.coco.gl/dashboard/intw/detail/${instagramId}`)
           .then(res=>res.json())
           .then(json=>{
            console.log("instagramIdjson",json);
            setInsta(json)
           })
        }
        instagramId1()
      })
      return(
    <div>
    <div>
       <p> {insta.fullName} </p>
       <p> {insta.instagramId}</p>
       <p>totalPost: {insta.totalPost} </p> 
       <p>avgLike: {insta.avgLike} </p> 
       <p>avgComment: {insta.avgComment} </p> 
       <p>postPerDay: {insta.postPerDay} </p> 
       <p> total Eng Rate{insta.totalEngagement*100}% </p> 
       <p> Eng Rate :{insta.engagement*100}% </p> 
       <p>following: {insta.followingCount} </p>
       <p>followers:{insta.followerCount} </p>
        <img alt="img" src={insta.profilePic}></img>
    </div>
     </div>
    )
}
export default Details