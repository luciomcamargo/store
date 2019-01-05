import React from "react";
import { Field, reduxForm } from "redux-form";

const style = {
  marginLeft: "40vw"
};

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <div style={style}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Your name:</label>
          <br />
          <Field name="order[name]" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="order[email]">Email:</label>
          <br />
          <Field name="order[email]" component="input" type="email" />
        </div>

        <div>
          <button type="submit">Submit order</button>
        </div>
      </form>
    </div>
  );
}

CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
