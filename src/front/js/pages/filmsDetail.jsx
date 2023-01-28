import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CardDetail from "../component/CardDetail.jsx"


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
                img={`https://starwars-visualguide.com/assets/img/films/${filmid}.jpg`}
                text= {<div>
                  <ul>
                    <li>Title: {data?.title}</li>
                    <li>Director: {data?.director} </li>
                    <li>Episode #: {data?.episode_id}</li>
                    <li>Producer:{data?.producer} </li>
                    <li>Release: {data?.release_date} </li>
                  </ul>
                </div>}
                type="films"
              />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default FilmDetail;
