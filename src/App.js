import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    date: "2000-01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2000-06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: "2000-07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: "2000-08",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-09",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-10",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-11",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-01",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-02",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-03",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-04",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-06",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-07",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-08",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-09",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-10",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-11",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2001-12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  // return date.getMonth() + 1;
  return "";
};

const renderQuarterTick = (tickProps) => {
  console.log("tickProps=", tickProps);
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  console.log("month=", month);
  // const year = date.getYear();
  // const quarterNo = Math.floor(month / 3) + 1;
  // const isMidMonth = month % 3 === 1;

  // if (month % 3 === 1) {
  //   // return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  //   return <text x={x} y={y - 4} textAnchor="middle">{value}</text>;
  // }
  if (month === 5) {
    return (
      <text x={x} y={y - 4} textAnchor="middle">
        {date.getFullYear()}
      </text>
    );
  }
  // const isLast = month === 11;
  const isLast = month === 11;

  // if (month % 3 === 0 || isLast) {
  //   const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

  //   return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  // }
  if (month === 11 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

const App = () => {
  return (
    <BarChart
      width={900}
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
      <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
      <XAxis
        dataKey="date"
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={renderQuarterTick}
        height={1}
        scale="band"
        xAxisId="moseh"
      />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="pv" fill="#8884d8" /> */}
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}

export default App;
