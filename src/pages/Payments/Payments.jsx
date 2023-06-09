import { useParams } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payments = () => {
  const { id } = useParams();
  const { selectClass } = useSelectedClass();
  const payClass = selectClass.find((select) => select._id === id);
  const amount = payClass.price;
  const price = parseFloat(amount.toFixed(2));

  return (
    <div className="w-full p-20 bg-white shadow-2xl rounded-2xl">
      <Elements stripe={stripePromise}>
        <Checkout price={price} payClass={payClass}></Checkout>
      </Elements>
    </div>
  );
};

export default Payments;
