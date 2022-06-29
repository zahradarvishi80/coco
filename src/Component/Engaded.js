import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import { IoIosCafe } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {setEngaded} from "../features/api/apiSlice"
import "../styles.css"
const option=[
  {item_name:"Art"},


]

const Engaded=()=>{
    // const[engage,setEngage]=useState([])
    // const[load,setLoad]=useState(false)
    const listEngaded = useSelector(state => state.api.listEngaded)
    const dispatch = useDispatch();
    useEffect(()=>{
        const engaged=()=>{
            fetch('https://new-api.coco.gl/dashboard/intw/top/engaged')
              .then(res=>res.json())
              .then(json=>{
            console.log("json",json);
            // setEngage(json)
             dispatch(setEngaded(json))
            // dispatch(
            //   todoAdded({
            //     api:engage
            //   })
            //  )
           }
          
           )
         
        }
        engaged()
      },[])
     

    return(
      <div className="Engaged">
      
             {listEngaded.map((item,index)=>{
            
              return(
                <div className="box" key={item.instagramId} id={index}>
                  <div className="main">

                   <nav>
                   <Link to={`Details/${item.instagramId}`}>
                     <div className="img1">
                  
                     {/* <img 
                     onerror=" this.src='../img/user.png'"
                      */}
                      <img 
                      className="img"
                      alt="profile" 
                       src={item.profilePic}
                        onError={(e)=>{
                          e.target.src = 'https://www.stregasystem.com/img/users/user.png'
                           }}
/>
                      </div>
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
export default Engaded