import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, BarChart, Bar, PieChart, Pie, RadialBarChart, RadialBar } from 'recharts';
import './Statics.css'

const Statics = () => {

    const assignmentsData = [
        {
            id: 1,
            assignment: 'Assignment-1',
            marks: 60,
            "fill": "#8884d8"
        },
        {
            id: 2,
            assignment: 'Assignment 2',
            marks: 60,
            "fill": "#83a6ed"
        },
        {
            id: 3,
            assignment: 'Assignment 3',
            marks: 60,
            "fill": "#8dd1e1"
        },
        {
            id: 4,
            assignment: 'Assignment 4',
            marks: 58,
            "fill": "#82ca9d"
        },
        {
            id: 5,
            assignment: 'Assignment 5',
            marks: 50,
            "fill": "#a4de6c"
        },
        {
            id: 6,
            assignment: 'Assignment 6',
            marks: 47,
            "fill": "#d0ed57"
            ,
        },
        {
            id: 7,
            assignment: 'Assignment 7',
            marks: 60,
            "fill": "#ffc658"
        },
        {
            id: 8,
            assignment: 'Assignment 8',
            marks: 52,
            "fill": "#a4de6c"
        }
    ]

    return (
        <div className='chart-section'>
            <h2>Assignments Marks</h2>
            <div>
            <RadialBarChart 
                    width={730} 
                    height={650} 
                    innerRadius="10%" 
                    outerRadius="80%" 
                    data={assignmentsData} 
                    startAngle={180} 
                    endAngle={0}
                    >
                    <RadialBar minAngle={15} label={{ fill: '#8884d8', position: 'insideStart' }} background clockWise={true} dataKey='marks' />
                    
                    <Tooltip />
            </RadialBarChart>
            </div>
        </div>
    );
};

export default Statics;