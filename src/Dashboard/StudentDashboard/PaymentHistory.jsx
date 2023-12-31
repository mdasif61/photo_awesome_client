import { useEffect } from "react";
import usePayments from "../../hooks/usePayments";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { history } = usePayments();
  console.log(history);

  return (
    <div className="bg-white p-10 rounded-xl shadow-2xl">
      <Helmet><title>Payment History | Photo Awesome</title></Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>${item.price}</td>
                <td>{item.transactionId.slice(3, 100)}</td>
                <td>{item.email}</td>
                <td>{item.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
