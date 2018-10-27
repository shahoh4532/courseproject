import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Flowers from "./Flowers";
import Cart from "./Cart";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>My Special Valentine</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Gift Cards</NavLink></li>
            <li><NavLink to="/contact">Candy</NavLink></li>
			<li><NavLink to="/flowers">Flowers</NavLink></li>
			<li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
			<Route path="/flowers" component={Flowers}/>
			<Route path="/cart" component={Cart}/>
          </div>
        </div>
      </HashRouter>
    );
    }
    onclick() {
      alert("hello there");
  }
}
 
export default Main;