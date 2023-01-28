import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"


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
              img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleid}.jpg`}
                text= {<div>
                  <ul>
                  <li>Cargo Capacity: {data?.cargo_capacity} </li>
                    <li>Consumables: {data?.consumables}</li>
                    <li>Cost in Credits:{data?.cost_in_credits} </li>
                    <li>Crew: {data?.crew} </li>
                    <li>Lenght: {data?.lenght}</li>
                    <li>Manufacturer {data?.manufacturer}</li>
                    <li>Lenght: {data?.lenght}</li>
                    <li>Max Atmosphering Speed: {data?.max_atmosphering_speed}</li>
                    <li>Model: {data?.model}</li>
                    <li>Name: {data?.name}</li>
                    <li>Passengers: {data?.passengers}</li>
                    <li>Vehicle Class: {data?.vehicle_class}</li>
                    
                  </ul>
                  </div>}
                type="vehicles"
                
                
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default VehiclesDetail;
