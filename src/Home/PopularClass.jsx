import { useEffect, useState } from "react";

const PopularClass = () => {

    const [populars,setPopulars]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popularClass')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default PopularClass;