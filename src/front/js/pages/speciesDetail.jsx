import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const speciesDetail = () => {
  const { store, actions } = useContext(Context);
  const { specieid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("species", specieid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Species</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="species"
                text="Specie from a Star Wars film"
                //img={`https://starwars-visualguide.com/assets/img/species/${specieid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default specieDetail;
