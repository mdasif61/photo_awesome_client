import { useEffect, useState } from "react";
import Container from "../container/Container";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructor;
