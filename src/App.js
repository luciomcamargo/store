import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Router from "./Router";

const navStyle = {
  height: "80px",
  backgroundColor: "#AF6254",
  color: "white"
};
const Navigation = ({ cart }) => (
  <nav style={navStyle}>
    <ul className="top-menu">
      <li>
        <h2 style={{ paddingRight: "35vw" }}>Comma Online Shop</h2>
      </li>
      <li>
        <NavLink to="/" className="Nav_link">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/cart" className="Nav_link">
          Cart (
          {cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout" className="Nav_link">
          Check out
        </NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default withRouter(connect(mapStateToProps)(App));
