import React from "react";
import { Link } from "react-router-dom";

const CardDetail = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        className="card-img-top"
        alt={props.type.toUpperCase() + " " + props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        
            {props.text}
            {props.name}
            {props.diameter}
            {props.rotation_period}
            {props.orbital_period}
            {props.gravity}
            {props.population}
            {props.climate}
            {props.terrain}
            
        
        <Link to={`/planets/${props.id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;
