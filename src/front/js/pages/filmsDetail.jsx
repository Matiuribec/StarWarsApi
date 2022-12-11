import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"
import propTypes from "prop-types";

export const FilmDetail = () => {
  const { store, actions } = useContext(Context);
  const { filmid } = useParams();
  const [data, setData] = useState();
 
  useEffect(() => {
    actions.getDetails("films", filmid)
    .then(reply=>(setData(reply)))
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Films</h1>
      <div className="container">
        <div className="row">
          <div className="col" >
              <CardDetail
                
                type="films"
                text="=Star Wars film"
                //img={`https://starwars-visualguide.com/assets/img/films/${filmid}.jpg`}
                
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default FilmDetail;
