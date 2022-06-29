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
        <div className="Details">

                <div className="header">
                 <img className="profile" 
                 onError={(e)=>{
                 e.target.src = 'https://www.stregasystem.com/img/users/user.png'
                 }}
                 alt="imgprofile" src={insta.profilePic}></img>
                     <div className="instaid">
                        <p className="instagramId"> @{insta.instagramId}</p>
                        <p className="fullName"> {insta.fullName} </p>
                    </div>
                </div>
                <div className="degree">
                   
                     <div className="box1">
                        <p className="Followers">Followers</p>
                        <p className="Followers1"> {insta.followerCount/1000}K </p>
                     </div>

                      <div className="boxx">
                      <p className="Rate">Period Eng Rate</p>
                      <p className="engagement"> {insta.engagement*100}% </p>
                     </div>

                     <div className="box2">
                        <p className="postPerDay">{insta.postPerDay} </p>   
                        <p className="Post">Post Per day</p>
                     </div>

                     <div className="box3">
                     <p className="Rate">Avg Likes</p>
                      <p className="engagement">{insta.avgLike}K </p>
                     </div>

                </div>


                <div className="degree">
                    <div className="boxx">
                         <p className="Following">Following</p>
                         <p className="Following1"> {insta.followingCount/1000}K </p>
                     </div>

                     <div className="box5">
                     <p className="Rate">Total Eng Rate</p>
                      <p className="engagement"> {insta.totalEngagement*100}%</p>
                     </div>

                     <div className="box2">
                        <p className="Post">Total Posts</p>
                        <p className="postPerDay">{insta.totalPost} </p>   
                       
                     </div>
                     <div className="boxx">
                     <p className="Rate">Avg Comments</p>
                     <p className="Following1">{insta.avgComment}  </p>
                     </div>
                </div>
        </div>
    
  
    )
}
export default Details
