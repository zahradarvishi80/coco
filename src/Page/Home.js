import React from "react";
import Engaded from "../Component/Engaded";
import Followers from "../Component/Followers";
import "../styles.css"
const Home=()=>{
    return (
         <div>
             <div className="head">
        <div className="div">
          <p className="p">Leaders in Engagement</p>
          <p className="explain">the top ten influencers in terms of Engagement. </p>
        </div>
        <div className="div">
          <p  className="p">Leaders in Followers</p>
          <p  className="explain">the top ten influencers in terms of Followers.</p>
         </div>
         </div>
         <div class="first">
        <Engaded />
        <Followers />
        </div>
         </div>
    )
}
export default Home