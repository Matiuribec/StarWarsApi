import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"


export const SpeciesDetail = () => {
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
                img={`https://starwars-visualguide.com/assets/img/species/${specieid}.jpg`}
                text= {<div>
                  <ul>
                    <li>Average Height: {data?.average_height} </li>
                    <li>Average Lifespan: {data?.average_lifespan}</li>
                    <li>Classification: {data?.classification} </li>
                    <li>Designation: {data?.designation} </li>
                    <li>Eye Colors: {data?.eye_colors}</li>
                    <li>Hair Colors: {data?.hair_colors}</li>
                    <li>Language: {data?.language}</li>
                    <li>Name: {data?.name}</li>
                    <li>Skin Color: {data?.skin_colors}</li>


                  </ul>
                  </div>}
                type="species"
                
                
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SpeciesDetail;
