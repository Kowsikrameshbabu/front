import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import BasicTable from './BasicTable'; // Importing the table component

function Home() {
    const data = [
        {
            name: 'January',
            accepted: 4000,
            rejected: 2400,
            amt: 2400,
        },
        {
            name: 'Feburary',
            accepted: 3000,
            rejected: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            accepted: 10000,
            rejected: 4800,
            amt: 2290,
        },
        {
            name: 'April',
            accepted: 5780,
            rejected: 2908,
            amt: 2000,
        },
        {
            name: 'May',
            accepted: 1890,
            rejected: 4800,
            amt: 2181,
        },
        {
            name: 'June',
            accepted: 6390,
            rejected: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            accepted: 5490,
            rejected: 1300,
            amt: 2100,
        },
    ];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>NO. OF JOBSEEKERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>1300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL RECRUITERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>233</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="accepted" fill="#5884d8" />
                        <Bar dataKey="rejected" fill="#ff4d00" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="accepted" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="rejected" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <BasicTable /> {/* Adding the table component here */}

        </main>
    );
}

export default Home;
