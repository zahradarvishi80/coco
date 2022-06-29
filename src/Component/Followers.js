import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import { IoIosCafe } from "react-icons/io";
import {setFollowers} from "../redux/api/apiSlice";
import { useDispatch,useSelector } from "react-redux";
import "../styles.css"
// import { bindActionCreators } from "@reduxjs/toolkit";
const option=[
  {item_name:"Art"},
]
const Followers=()=>{
    // const[followi,setFollowi]=useState([])
    useEffect(()=>{
      follow()
    },[])
  
  const listFollowers=useSelector(state=>state.api.listFollowers)
  const dispatch=useDispatch()
    const follow=()=>{
      fetch('https://new-api.coco.gl/dashboard/intw/top/followers')
     .then(res=>res.json())
     .then(json=>{
      console.log("Follow",json);
      // setFollowi(json)
      dispatch(setFollowers(json))
     })
  }
  return(
    <div className="Engaged">
      
    {listFollowers.map((item,index)=>{
   
     return(
       <div className="box"  key={item.instagramId} id={index}>
         <div className="main">
          <nav>
          <Link to={`Details/${item.instagramId}`}>
            <div className="img1">
        
            <img className="img"   
            onError={(e)=>{
            e.target.src = 'https://www.stregasystem.com/img/users/user.png'
             }}
             alt="profile" src={item.profilePic}/></div>
           </Link>
          </nav> 

          <div className="name">      
           <p className="id">@{item.instagramId}</p>
           <p className="bio" key={item}>{item.fullName} </p>
          </div>
           <div className="category">
             <div  className="cat1">
               {
                 option.map((i,index)=>{
                   return(
                     <div>
                     <p className="position" key={index} id={i}>{i.item_name} </p>
                     </div>
                   )
                 })
               }
              <IoIosCafe className="tea" />
             </div>
             <div className="cat">
             <p className="position">{item.category}</p>
             </div>   
             </div>   
             <div className="icon">
             <nav>
          <Link to={`Details/${item.instagramId}`}>
         <AiOutlineMore size={20} />
         </Link>
         </nav>
         </div>

           </div>
            </div>
     )
    })}
   </div>
  )
}
export default Followers;