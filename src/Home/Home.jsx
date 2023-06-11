import { useEffect } from "react";
import PhotoGraphySample from "./PhotoGraphySample";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import Slider from "./Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <Helmet>
                <title>Home | Photo Awesome</title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <PhotoGraphySample></PhotoGraphySample>
        </div>
    );
};

export default Home;