import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../container/Container";
import { FaEnvelope } from "react-icons/fa";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/instructor").then((res) => {
      setInstructors(res.data);
    });
  }, []);

  return (
    <Container>
      <h1 className="text-2xl font-bold text-green-600 text-center">
        Popular Instructor
      </h1>
      <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-5">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card p-5 bg-white shadow-xl">
            <figure>
              <img
                className="w-36 h-36 rounded-full"
                src={instructor.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center font-bold">{instructor.name}</h2>
              <p className="flex flex-col items-center mt-4">
                <FaEnvelope />
                {instructor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularInstructor;
