import { useEffect, useState } from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const PopularClass = () => {
  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then((res) => res.json())
      .then((data) => {
        setPopulars(data);
      });
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold text-center">Popular Classes</h1>
      <Container>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-10">
          {populars.slice(0, 6).map((popular) => (
            <div
              key={popular._id}
              className="card bg-base-100 hover:scale-95 duration-300 shadow-xl image-full"
            >
              <figure>
                <img src={popular.image} alt="popular class" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{popular.name}</h2>
                <p>Instructor : {popular.instructor}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClass;
