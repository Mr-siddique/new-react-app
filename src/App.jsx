import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Menu from "./Menu";
import Footer from "./Footer";
const App = () => {
    return (
        <>
        <div className="container">
            <Menu/>
            <Switch>
                <Route exact path="/" component={()=><Home/>} />
                <Route exact path="/contact" component={()=><Contact/>} />
                <Route exact path="/about" component={()=><About/>} />
                <Route exact path="/service" component={()=><Service/>} />
                <Redirect to="/" />
            </Switch>
            <Footer/>
            </div>
        </>
    )
}
export default App;