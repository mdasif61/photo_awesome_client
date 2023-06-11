import { useEffect, useState } from "react";
import Container from "../container/Container";
import { FaEnvelope } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allInstructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div className="bg-green-100 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
          {instructors.map((instructor) => (
            <Fade key={instructor._id}>
              <div className="card bg-base-100 h-[400px] shadow-xl">
                <figure>
                  <img className="w-full" src={instructor.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title border-b-2 pb-3">{instructor.name}</h2>
                  <p className="text-lg mt-3">
                    <FaEnvelope />
                    {instructor.email}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructor;
