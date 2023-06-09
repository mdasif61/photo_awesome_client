import "../Css/Classes.css";
import ClassesCart from "./ClassesCart";
import Container from "../container/Container";
import useApproveClass from "../hooks/useApproveClass";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";
import Swal from "sweetalert2";

const Classes = () => {
  const { approvedClass, refetch } = useApproveClass();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleSelect = (singleClass) => {
    const { name, instructor, price, seats, _id, image } = singleClass;
    const selectClass = {
      name,
      instructor,
      price,
      seats,
      selectId: _id,
      email: user?.email,
      image,
    };
    axiosSecure.post("/selectedClass", selectClass).then((res) => {
      if (res.data.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.data.message,
        });
      }
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Select Success",
          showConfirmButton: false,
          timer: 1500,
        });
        axiosSecure.patch(`/seats/${singleClass._id}`,singleClass)
        .then(res=>{
          if(res.data.modifiedCount>0){
            refetch()
          }
        })
      }
    });
  };

  return (
    <div>
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
