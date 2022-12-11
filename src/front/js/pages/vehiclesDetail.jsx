import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const VehiclesDetail = () => {
  const { store, actions } = useContext(Context);
  const { vehicleid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("vehicles", vehicleid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">vehicles</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="vehicles"
                text="vehicle from a Star Wars film"
                //img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default VehiclesDetail;
