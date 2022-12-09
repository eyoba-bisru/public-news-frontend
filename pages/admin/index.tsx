import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import SidebarWithHeader from "../../components/Sidenav";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Analytics",
    },
  },
};
const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Analytics",
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const data2 = {
  labels,
  datasets: [
    {
      label: "Visitors",
      data: [12, 19, 3, 5, 2, 4, 3],
      backgroundColor: "#4C230A",
    },
    {
      label: "Dataset 2",
      data: [12, 19, 3, 5, 2, 4, 3],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const dashboard = () => {
  return (
    <SidebarWithHeader>
      <div>
        <div className="container px-6 mx-auto grid">
          <h2 className="my-4 text-2xl font-semibold text-primary">
            Dashboard
          </h2>

          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Total Users
                </p>
                <p className="text-lg font-semibold text-gray-700">19238</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  User active
                </p>
                <p className="text-lg font-semibold text-gray-700">120</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Users suspend
                </p>
                <p className="text-lg font-semibold text-gray-700">6389</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  User vip
                </p>
                <p className="text-lg font-semibold text-gray-700">828</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col lg:w-[80%] gap-10 items-center justify-center w-[100%] h-auto">
          <Bar options={options} data={data2} />
          <Pie data={data} options={options2} />
        </div>
      </div>
    </SidebarWithHeader>
  );
};

export default dashboard;
