import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    books: 4120,
    clothes: 2130,
    electronic: 2520,
  },
  {
    name: "Mon",
    books: 2981,
    clothes: 2387,
    electronic: 2490,
  },
  {
    name: "Tue",
    books: 2210,
    clothes: 2500,
    electronic: 4290,
  },
  {
    name: "Wed",
    books: 5680,
    clothes: 4918,
    electronic: 3900,
  },
  {
    name: "Thu",
    books: 3887,
    clothes: 3890,
    electronic: 3191,
  },
  {
    name: "Fri",
    books: 4290,
    clothes: 8100,
    electronic: 3330,
  },
  {
    name: "Sat",
    books: 4090,
    clothes: 9300,
    electronic: 2050,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#39A7FF"
              fill="#39A7FF"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#F05941"
              fill="#D3756B"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#83A2FF"
              fill="#83A2FF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
