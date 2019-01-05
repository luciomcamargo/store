import React from "react";
import ProductListItem from "./product-list-item";
import { connect } from "react-redux";
import fetchApi from "../../modules/fetch-api";

class ProductListing extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi("get", "https://api.jsonbin.io/b/5c30cc657b31f426f8518899/8").then(
      json => {
        loadProducts(json);
      }
    );
  }

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props;

    return (
      <div className="product-listing">
        {products.map(product => (
          <ProductListItem
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: "LOAD", payload: products });
    },
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
