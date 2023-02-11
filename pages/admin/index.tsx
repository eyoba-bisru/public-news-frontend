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
import Head from "next/head";
import { useEffect, useState } from "react";

import { Bar, Pie } from "react-chartjs-2";
import SidebarWithHeader from "../../components/Sidenav";
import instance from "../../lib/axiosInstance";
import { HiNewspaper } from "react-icons/hi";
import { MdModeEditOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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
const labels = [
  "Sport",
  "Health",
  "Sci-Tech",
  "Education",
  "Bussiness",
  "Culture",
  "Politics",
];

const Dashboard = () => {
  const [numOfAuthors, setNumOfAuthors] = useState(0);
  const [numOfPosts, setNumOfPosts] = useState(0);
  const [numOfSubs, setNumOfSubs] = useState(0);
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [visitors, setVisitors] = useState(0);

  async function fetchData() {
    const { data } = await instance.get("/post/analytics");
    setData(data);
    const { data: vis } = await instance.get("/post/visitors");
    setVisitors(vis);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchNums() {
    const { data: authors } = await instance.get("/company/numOfAuthors");
    setNumOfAuthors(authors);
    const { data: posts } = await instance.get("/post/numOfPosts");
    setNumOfPosts(posts);
    const { data: subs } = await instance.get("/auth/numOfSubs");
    setNumOfSubs(subs);
  }

  useEffect(() => {
    fetchNums();
  }, []);

  return (
    <SidebarWithHeader>
      <Head>
        <title>Dashboard</title>
      </Head>
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
                  Total Vistors
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  {visitors}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                <FiUsers />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Total subscribers
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  {numOfSubs}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                <HiNewspaper />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Total news posted
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  {numOfPosts}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                <MdModeEditOutline />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Total Authors
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  {numOfAuthors}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col lg:w-[80%] gap-10 items-center justify-center w-[100%] h-auto">
          <Bar
            options={options}
            data={{
              labels,
              datasets: [
                {
                  label: "Categories",
                  data,
                  backgroundColor: "#4C230A",
                },
              ],
            }}
          />
        </div>
      </div>
    </SidebarWithHeader>
  );
};

export default Dashboard;
