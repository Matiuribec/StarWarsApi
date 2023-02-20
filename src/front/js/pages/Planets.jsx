import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Cards from "../component/Cards.jsx";


export const Planets = (props) => {
  const { store, actions } = useContext(Context);
   const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(0)
  const [currentPage, setcurrentPage] = useState(1)

  useEffect(async() => {
    actions.getResources("planets", {page:searchParams.get("page")}).then((resp) => {
      if(resp) {
       console.log(resp.pages)
        setPages (resp.pages);
        
      }
    }
    
    )
  }, [searchParams.get("page")]);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Planets</h1>
      <div className="container">
        <div className="row">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="col-4 md-2">
              <Cards
                id={planet.uid}
                type="planets"
                text="Planet from a Star Wars film"
                img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                title={planet.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Planets.propTypes = {
  match: PropTypes.object,
};
