import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";

export const Starships = props => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=> {actions.getResources("starships")},[])

	return (
		<div className="jumbotron">
      <h1 className="display-4">Starships</h1>
      <div className="container">
        <div className="row">
          {store.starships.map((starship) => (
            <div key={starship.uid} className="col">
              <Cards
                id={starship.uid}
                type="starships"
                text={props.manufacturer}
                img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                title={starship.name}
				
              />
			 
            </div>
          ))}
		  
        </div>
      </div>
    </div>
	);

	}
Starships.propTypes = {
	match: PropTypes.object
};