import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"


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
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
              img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
                text= {<div>
                  <h1 className="display-4">{data.name}</h1> 
                  <ul>
                    <li>Name: {data.name} </li>
                    <li>Diameter: {data.diameter}</li>
                    <li>Orbital Period:{data.orbital_period} </li>
                    <li>Gravity: {data.gravity} </li>
                    <li>Rotation Period: {data.rotation_period}</li>
                    <li>Population: {data.population}</li>
                    <li>Climate: {data.climate}</li>
                    <li>Terrain: {data.terrain}</li>


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
