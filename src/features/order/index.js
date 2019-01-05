import React from "react";

import fetchApi from "../../modules/fetch-api";

const style = {
  marginLeft: "40vw"
};

class Order extends React.Component {
  state = {
    order: null
  };

  componentDidMount() {
    fetchApi(
      "get",
      `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
    ).then(json => {
      this.setState({
        order: json
      });
    });
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order;

    return (
      <div style={style}>
        <h2>My order</h2>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>

        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                product,
                qty,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} width={32} />
                  {name}({qty} @ ${price} = $
                  {parseFloat(qty) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : "Loading...."}</div>;
  }
}

export default Order;
