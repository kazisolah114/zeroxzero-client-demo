import React from 'react';
import Leaderboard from './Leaderboard/Leaderboard';
import { Helmet } from 'react-helmet';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Leaderboard | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <Leaderboard />
            
            
        </div>
    );
};

export default Dashboard;