import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    followers: 4000,
    engagement: 2400,
    reach: 2400,
  },
  {
    name: 'Tue',
    followers: 4200,
    engagement: 2800,
    reach: 2800,
  },
  {
    name: 'Wed',
    followers: 4500,
    engagement: 3200,
    reach: 3200,
  },
  {
    name: 'Thu',
    followers: 4800,
    engagement: 3600,
    reach: 3600,
  },
  {
    name: 'Fri',
    followers: 5200,
    engagement: 4000,
    reach: 4000,
  },
  {
    name: 'Sat',
    followers: 5500,
    engagement: 4400,
    reach: 4400,
  },
  {
    name: 'Sun',
    followers: 6000,
    engagement: 4800,
    reach: 4800,
  },
];

export default function AnalyticsChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line
            type="monotone"
            dataKey="followers"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
          <Line type="monotone" dataKey="reach" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}