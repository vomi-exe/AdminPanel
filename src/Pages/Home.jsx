import React, { useEffect } from 'react';
import "./home.css";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Chart from '../components/Chart/Chart';
import { userData } from "../dummydata";
import WidgetSm from "../components/WidgetSm/WidgetSm";
import WidgetLg from "../components/WidgetLg/WidgetLg";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])


    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />

            <div className="homeWidgets">
                <WidgetSm />


                <WidgetLg />


            </div>
        </div>
    );
}

export default Home;
