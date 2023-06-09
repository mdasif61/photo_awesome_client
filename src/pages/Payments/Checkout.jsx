import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Checkout = ({payClass}) => {

    const [sectet,setSecret]=useState('')

  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure]=useAxiosSecure()

  useEffect(()=>{
    axiosSecure.post(`/create-payment-intent`,{price:payClass.price})
    .then(res=>{
        console.log(res);
        setSecret(res.data.clintSecret)
    })
  },[axiosSecure,payClass.price])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center">
      <button
        className="btn bg-green-500 mt-5 w-36 text-white"
        type="submit"
        disabled={!stripe}
      >
        Confirm Pay
      </button>
      </div>
    </form>
  );
};

export default Checkout;
