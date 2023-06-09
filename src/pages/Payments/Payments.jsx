import { useParams } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_KEY)
const Payments = () => {
    const {id}=useParams();
    const {selectClass}=useSelectedClass()
    const payClass=selectClass.find(select=>select._id===id);

    return (
        <div className="w-full p-20">
           <Elements stripe={stripePromise}>
                <Checkout payClass={payClass}></Checkout>
           </Elements>
        </div>
    );
};

export default Payments;