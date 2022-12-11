import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const PlanetDetail = () => {
  const { store, actions } = useContext(Context);
  const { planetid } = useParams();
  const [data, setData] = useState({});
 
  useEffect(() => {
    actions.getDetails("planets", planetid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Planets</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
              img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
                text= {<div>
                  <ul>
                    <li>Name: {data.name} </li>
                    <li>Diameter:</li>
                    <li>Orbital Period: </li>
                    <li>Gravity: </li>
                    <li>Rotational Period: </li>
                    <li>Population: </li>
                    <li>Climate: </li>
                    <li>Terrain: </li>


                  </ul>
                </div>}
                type="planets"
                
                
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default PlanetDetail;
