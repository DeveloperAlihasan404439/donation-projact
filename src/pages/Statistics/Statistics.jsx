
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip,Legend,  } from "recharts";
import { useDonationFetch } from "../../utitlites/donationFetch";
import { getDonations } from "../../utitlites/utitlites";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
    const donationFetch = useDonationFetch('/donationsData.json')
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const localStroge = getDonations();
    if (donationFetch.length > 0) {
      const exites = [];
      for (const id of localStroge) {
        const makeDonetion = donationFetch?.find(
          (mokeData) => mokeData.id === id
        );
        exites.push(makeDonetion);
      }
      setDonations(exites);
    }
  }, [donationFetch]);
  const currentPrice = donations.reduce(
    (prevend, current) => prevend + current.price,
    0
  );
  const totalPrice = donationFetch.reduce(
    (prevend, current) => prevend + current.price,
    0
  );

  const data = [
    {id: 1, name: "Current Price", value: currentPrice },
    {id: 2, name: "Total Price", value: totalPrice },
  ];

  const COLORS = ["#00c49f","#ff444a",];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
    return (
        <div className="flex justify-center pt-20 h-[100vh]">
          <Helmet>
            <title>Statistics</title>
          </Helmet>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              
              cy="Current Price"
              cx="Total Price"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey ={(entry) => entry.value}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip/>
            <Legend />
            <Legend/>
          </PieChart>
        </div>
      );
};

export default Statistics;
