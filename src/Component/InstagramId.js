// import React,{useState,useEffect} from "react"
// import { useParams } from "react-router-dom"
// const InstagramId=()=>{
//     const[insta,setInsta]=useState([])
//     const {instagramId}=useParams()
//     console.log("ppp",instagramId);
//     useEffect(()=>{
//         const instagramId1=()=>{
//             fetch(`https://new-api.coco.gl/dashboard/intw/detail/${instagramId}`)
//            .then(res=>res.json())
//            .then(json=>{
//             console.log("instagramIdjson",json);
//             setInsta(json)
//            })
//         }
//         instagramId1()
//       },[])
//     return(
//         <div>

// <p> </p>
//     </div>
//     )
// }
// export default InstagramId