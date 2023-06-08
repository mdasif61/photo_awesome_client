import "../Css/Classes.css";
import ClassesCart from "./ClassesCart";
import Container from "../container/Container";
import useApproveClass from "../hooks/useApproveClass";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Classes = () => {
  const { approvedClass } = useApproveClass();
  const [axiosSecure] = useAxiosSecure();

  const handleSelect = (singleClass) => {
    const { name, instructor, price, status, seats, _id } = singleClass;
    const selectClass={name, instructor, price, seats, selectId:_id}
    // axiosSecure.post('/selectedClass')
  };

  return (
    <div className="classBG">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
          {approvedClass.map((singleClass) => (
            <ClassesCart
              key={singleClass._id}
              singleClass={singleClass}
              handleSelect={handleSelect}
            ></ClassesCart>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Classes;
