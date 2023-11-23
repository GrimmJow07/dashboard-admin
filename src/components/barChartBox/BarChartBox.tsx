import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type PropsBarChartBox = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

function BarChartBox(props: PropsBarChartBox) {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F1717",
                color: "white",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
