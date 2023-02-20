import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import HomeCard from "../component/HomeCard.jsx";



export const Home = props => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=> {actions.getResources("planets")},[])
	useEffect(()=> {actions.getResources("films")},[])
	useEffect(()=> {actions.getResources("species")},[])
	useEffect(()=> {actions.getResources("vehicles")},[])
	useEffect(()=> {actions.getResources("starships")},[])
	useEffect(()=> {actions.getResources("people")},[])


return (
  <div className="jumbotron">
    <h1 className="display-4">Home</h1>
    <div className="container">
      <div className="row">
        {store.films.map((film) => (
          <div key={film.uid} className="col">
            <HomeCard
              id={film.uid}
              type="films"
              text={film.properties.director}
              img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
              title={film.properties.title}
            />
          </div>
        ))}
      </div>
	  <div className="row">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="col">
              <HomeCard
                id={planet.uid}
                type="planets"
                text="Planet from a Star Wars film"
                img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                title={planet.name}
              />
            </div>
          ))}
        </div>
		<div className="row">
				{store.species.map((specie)=> (
					<div key={specie.uid} className="col">
						<HomeCard
						id={specie.uid}
						type="species"
						text="A Star Wars specie"
						img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
						title={specie.name}
						/>
					</div>
					))}
			</div>
			<div className="row">
          {store.starships.map((starship) => (
            <div key={starship.uid} className="col">
              <HomeCard
                id={starship.uid}
                type="starships"
                text={props.manufacturer}
                img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                title={starship.name}
				
              />
			 
            </div>
          ))}
		  
        </div>
		<div className="row">
          {store.vehicles.map((vehicle) => (
            <div key={vehicle.uid} className="col">
              <HomeCard
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
)
		};
