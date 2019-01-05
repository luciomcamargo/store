import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h5 style={{ paddingBottom: "10px" }}>{props.product.name}</h5>
      <img height={230} title={props.product.name} src={props.product.image} />
      <div>{props.product.description}</div>
      <div>€{props.product.price}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
