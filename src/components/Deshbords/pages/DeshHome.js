import React from 'react';
import Charts from '../components/recharts/Charts';
import { userdata } from '../components/recharts/dummyData';

import './DeshHome.css'
import FeaturedInfo from './FeaturedInfo/FeaturedInfo';
const DeshHome = () => {
    return (
        <div className="deshHome">
            <FeaturedInfo></FeaturedInfo>
            <Charts data={userdata} title="User Analytics"dataKey="Active User" grid></Charts>
         
        </div>
    );
};

export default DeshHome;