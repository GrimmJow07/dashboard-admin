import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const dataPieChart = [
  { name: "Mobile", value: 470, color: "#83A2FF" },
  { name: "Desktop", value: 330, color: "#39A7FF" },
  { name: "Laptop", value: 520, color: "#9AD0C2" },
  { name: "Tablet", value: 430, color: "#F05941" },
];

export const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Pie
              data={dataPieChart}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {dataPieChart.map((item) => (
                <Cell key={`cell-${item}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {dataPieChart.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
