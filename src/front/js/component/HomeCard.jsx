import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const HomeCard = (props) => {
  useEffect(()=> {console.log(props.id)},[])
  return (
    <div className="card">
      <img
        src={props.img}
        className="card-img-top"
        alt={props.type.toUpperCase() + " " + props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
