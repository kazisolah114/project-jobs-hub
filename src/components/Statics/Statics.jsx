import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, BarChart, Bar } from 'recharts';
import './Statics.css'

const Statics = () => {

    const assignmentsData = [
        {
            id: 1,
            assignment: 'Assignment-1',
            marks: 60,
        },
        {
            id: 2,
            assignment: 'Assignment 2',
            marks: 60,
        },
        {
            id: 3,
            assignment: 'Assignment 3',
            marks: 60,
        },
        {
            id: 4,
            assignment: 'Assignment 4',
            marks: 58,
        },
        {
            id: 5,
            assignment: 'Assignment 5',
            marks: 50,
        },
        {
            id: 6,
            assignment: 'Assignment 6',
            marks: 47
            ,
        },
        {
            id: 7,
            assignment: 'Assignment 7',
            marks: 60,
        },
        {
            id: 8,
            assignment: 'Assignment 8',
            marks: 52,
        }
    ]

    return (
        <div className='chart-section'>
            <h2>Assignments Marks</h2>
            <div>
                <BarChart
                    width={1100}
                    height={300}
                    data={assignmentsData}
                >
                    <Bar type="monotone" dataKey="marks" fill="#8884d8"></Bar>
                    <XAxis dataKey="assignment"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Statics;