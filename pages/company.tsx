import React from "react";
import SidebarWithHeader from "../components/Sidenav";
import { FiEdit } from "react-icons/fi";

import { MdDeleteForever } from "react-icons/md";

const company = () => {
  return (
    <SidebarWithHeader>
      <div className="flex flex-col gap-10 h-screen">
        <div className="flex justify-between ">
          <p className=" text-primary text-[23.165px] ">News Companies</p>
        </div>

        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Company Name
              </th>

              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email Address
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Phone
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Company Name
                </span>
                Jamal Rios
              </td>

              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Email Address
                </span>
                jrios@icloud.com
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Phone
                </span>
                582-3X2-6233
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="flex gap-2">
                  <span className="inline w-1/3 md:hidden font-bold">
                    Actions
                  </span>

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                    <FiEdit />
                  </button>

                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    <MdDeleteForever />
                  </button>
                </span>
              </td>
            </tr>
            <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Company Name
                </span>
                Erwin Campbell
              </td>

              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Email Address
                </span>
                ecampbell088@hotmail.com
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Phone
                </span>
                318-685-X414
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="flex gap-2">
                  <span className="inline w-1/3 md:hidden font-bold">
                    Actions
                  </span>

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                    <FiEdit />
                  </button>

                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    <MdDeleteForever />
                  </button>
                </span>
              </td>
            </tr>
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Company Name
                </span>
                Lillie Clark
              </td>

              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Email Address
                </span>
                lillie.clark@gmail.com
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Phone
                </span>
                505-644-84X4
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="flex gap-2">
                  <span className="inline w-1/3 md:hidden font-bold">
                    Actions
                  </span>

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                    <FiEdit />
                  </button>

                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    <MdDeleteForever />
                  </button>
                </span>
              </td>
            </tr>
            <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Company Name
                </span>
                Maribel Koch
              </td>

              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Email Address
                </span>
                mkoch@yahoo.com
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Phone
                </span>
                582-400-3X36
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="flex gap-2">
                  <span className="inline w-1/3 md:hidden font-bold">
                    Actions
                  </span>

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">
                    <FiEdit />
                  </button>

                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    <MdDeleteForever />
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SidebarWithHeader>
  );
};

export default company;
