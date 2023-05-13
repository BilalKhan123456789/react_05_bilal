
import React from "react";
import { BsFacebook, } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

import { BsInstagram } from 'react-icons/bs';

class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "whitesmoke" }}>

<div style={{ marginLeft: "20px" }}>

<i>{<BsFacebook />} </i>
<i>{<AiFillTwitterCircle />} </i>
<i>{<BsInstagram />}</i>


</div>




     
     <i style={{color:"Black"}}>Create By Bilal Fareedi </i>  
        <p style={{color:"Blue" , marginLeft:"30px"}}> © Copyright 2021 | Barkaati_Print | All right reserved</p>

     

      
      </div>
    )
  }
}

export default Footer

