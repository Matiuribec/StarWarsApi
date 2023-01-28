import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx";


export const StarshipsDetail = () => {
  const { store, actions } = useContext(Context);
  const { starshipsid } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    actions
      .getDetails("starships", starshipsid)
      .then((reply) => setData(reply));
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Starships</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <CardDetail
              img={`https://starwars-visualguide.com/assets/img/starships/${starshipsid}.jpg`}
              text={
                <div>
                  <ul>
                    <li>Cargo Capacity: {data?.cargo_capacity} </li>
                    <li>Consumables: {data?.consumables}</li>
                    <li>Cost in Credits:{data?.cost_in_credits} </li>
                    <li>Crew: {data?.crew} </li>
                    <li>Hyperdrive Rating: {data?.hyperdrive_rating}</li>
                    <li>Lenght: {data?.lenght}</li>
                    <li>Manufacturer: {data?.manufacturer}</li>
                    <li>Model: {data?.model}</li>
                    <li>Name: {data?.name}</li>
                    <li>Passengers: {data?.passengers}</li>
                    <li>Starship Class: {data?.starships_class}</li>
                  </ul>
                </div>
              }
              type="starships"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipsDetail;
