import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getResources("planets");
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Planets</h1>
      <div className="container">
        <div className="row">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="col">
              <Cards
                id={planet.uid}
                type="planets"
                text="Planet from a Star Wars film"
                img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                title={planet.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Planets.propTypes = {
  match: PropTypes.object,
};
