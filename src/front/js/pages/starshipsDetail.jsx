import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const StarshipsDetail = () => {
  const { store, actions } = useContext(Context);
  const { starshipsid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("starships", starshipsid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Starships</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="starships"
                text="starships from Star Wars"
                //img={`https://starwars-visualguide.com/assets/img/starships/${starshipsid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default StarshipsDetail;
