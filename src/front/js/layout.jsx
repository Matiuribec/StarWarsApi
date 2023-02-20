import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Species } from "./pages/Species.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Films } from "./pages/Films.jsx";
import { Home } from "./pages/Home.jsx";
import { Characters } from "./pages/Characters.jsx";
import { Starships } from "./pages/Starships.jsx";
import { Vehicles } from "./pages/Vehicles.jsx";
import { PlanetDetail } from "./pages/planetsDetail.jsx";
import {FilmDetail} from "./pages/filmsDetail.jsx"
import {SpeciesDetail} from "./pages/speciesDetail.jsx"
import {StarshipsDetail} from "./pages/starshipsDetail.jsx"
import {VehiclesDetail} from "./pages/vehiclesDetail.jsx"


import injectContext from "./store/appContext.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Species />} path="/species" />
                        <Route element={<SpeciesDetail />} path="/species/:specieid" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<Films />} path="/films" />
                        <Route element={<FilmDetail />} path="/films/:filmid" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<PlanetDetail />} path="/planets/:planetid" />
                        <Route element={<Characters />} path="/characters" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<StarshipsDetail />} path="/starships/:starshipsid" />
                        <Route element={<Vehicles />} path="/Vehicles" />
                        <Route element={<VehiclesDetail />} path="/Vehicles/:vehicleid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
