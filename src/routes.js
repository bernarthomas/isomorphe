"use strict";
import React from "react"
import { Route, IndexRoute } from "react-router"
import Layout from "./components/Layout";
import AccueilPage from "./components/AccueilPage";
import AutrePage from "./components/AutrePage";
import NonTrouvePage from "./components/NonTrouvePage";
const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={AccueilPage} />
        <Route path="autre_page/:id" component={AutrePage} />
        <Route path="*" component={NonTrouvePage} />
    </Route>
);
export default routes;
