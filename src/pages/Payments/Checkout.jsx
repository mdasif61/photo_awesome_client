import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Shared/Context";

const Checkout = ({payClass}) => {
    const [error,setError]=useState('')
    const [sectet,setSecret]=useState('')
    const {user}=useContext(AuthContext)

  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure]=useAxiosSecure()

  useEffect(()=>{
  try {
    axiosSecure.post(`/create-payment-intent`,{price:payClass.price})
    .then(res=>{
        console.log(res);
        setSecret(res.data.clintSecret)
    })
  } catch (error) {
    console.log(error)
  }
  },[axiosSecure,payClass])

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const {error}=await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        setError(error.message)
    }else{
        setError('')
    }
    
    const {paymentIntent, error:confirmError}=await stripe.confirmCardPayment(
        sectet,
        {
            payment_method:{
                card:card,
                billing_details:{
                    name:user?.displayName || 'unknown',
                    email:user?.email || 'unknown'
                }
            }
        }
    )
    if(confirmError){
        setError(confirmError.message)
    }

    if (paymentIntent.status === 'succeeded') {
        const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price:payClass.price,
            date: new Date(),
            selectItem: payClass._id,
            classItems: payClass.selectId,
            className:payClass.name
        }
        axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display confirm
                }
            })
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
