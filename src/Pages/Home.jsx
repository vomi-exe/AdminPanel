import React from 'react';
import "./home.css";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Chart from '../components/Chart/Chart';
import { userData } from "../dummydata";

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />





        </div>
    );
}

export default Home;
