import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";

export const Characters = props => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=> {actions.getResources("people")},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">Characters</h1>
			<div className="container">
				<div className="row">
					
					{store.people.map((character)=> (<div key={character.uid} className="col">
						<Cards
					id={character.uid}
					type="people"
					text="Star Wars character"
					img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
					title={character.name}
					/>
					</div>
					))}
					</div>
				

			</div>
				
		</div>
	);

	}
Characters.propTypes = {
	match: PropTypes.object
};