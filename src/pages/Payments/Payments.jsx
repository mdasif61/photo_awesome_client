import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payments = () => {
  const [axiosSecure]=useAxiosSecure()
  const { id } = useParams();
  const [payClass,setPayClass]=useState({})
  const amount = payClass.price;
  const price = parseFloat(amount).toFixed(2);

    useEffect(()=>{
      axiosSecure.get(`/unique/${id}`)
      .then(res=>{
        setPayClass(res.data)
      })
    },[axiosSecure,id])

  return (
    <div className="w-full p-20 bg-white shadow-2xl rounded-2xl">
      <Helmet><title>Payment | Photo Awesome</title></Helmet>
      <Elements stripe={stripePromise}>
        <Checkout price={price} payClass={payClass}></Checkout>
      </Elements>
    </div>
  );
};

export default Payments;
