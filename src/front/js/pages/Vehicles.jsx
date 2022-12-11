import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";

export const Vehicles = props => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=> {actions.getResources("vehicles")},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">Vehicles</h1>
			<div className="jumbotron">
      <div className="container">
        <div className="row">
          {store.vehicles.map((vehicle) => (
            <div key={vehicle.uid} className="col">
              <Cards
                id={vehicle.uid}
                type="vehicle"
                text={props.vehicle_class}
                img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                title={vehicle.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
		</div>
	);

	}
Vehicles.propTypes = {
	match: PropTypes.object
};