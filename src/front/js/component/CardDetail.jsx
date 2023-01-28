import React from "react";
import { Link } from "react-router-dom";

const CardDetail = (props) => {

  
  return (
    <div className="card mx-auto" style={{width: "28rem"}}>
      <img
        src={props.img} 
        className="card-img-top"
        alt={props.type.toUpperCase() + " " + props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        
            {props.text}
            
            
        
        <Link to={-1} className="btn btn-primary">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;
