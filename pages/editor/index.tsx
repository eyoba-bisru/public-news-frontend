import { AiFillPlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BiShow } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Editornav from "../../components/Editornav";
import Head from "next/head";
import Link from "next/link";
const posts = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="flex flex-col gap-4">
        <Editornav />
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 px-6 w-[70%] h-screen">
            <div className="flex justify-between items-center">
              <p className=" text-text text-[19.21px] font-bold ">Posts</p>
              <Link href="editor/addpost">
                <div className="flex bg-primary hover:bg-secondary gap-2 px-6 py-2  rounded-md cursor-pointer">
                  <button className="text-white inline">Add</button>
                  <AiFillPlusCircle className="text-white text-2xl" />
                </div>
              </Link>
            </div>
            <div>
              <table className="min-w-full border-collapse block md:table ">
                <thead className="block md:table-header-group">
                  <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-primary p-2 text-white  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      N<span className="underline">o</span>
                    </th>
                    <th className="bg-primary p-2 text-white  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Title
                    </th>
                    <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      News Location
                    </th>
                    <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Content Category
                    </th>
                    <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Language Category
                    </th>
                    <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group ">
                  <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        N<span className="underline">o</span>
                      </span>
                      1
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Title
                      </span>
                      Jamal Rios
                    </td>

                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        News Location
                      </span>
                      jrios@icloud.com
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Content Categroy
                      </span>
                      582-3X2-6233
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Language Category
                      </span>
                      Amharic
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="flex gap-2">
                        <span className="inline w-1/3 md:hidden font-bold">
                          Action
                        </span>
                        <Link
                          href="editor/show"
                          className="bg-primary hover:bg-secondary text-white font-bold py-1 px-2 border border-primary hover:border-secondary rounded"
                        >
                          <BiShow />
                        </Link>
                        <Link
                          href="editor/editpost"
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                        >
                          <FiEdit />
                        </Link>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                          <MdDeleteForever />
                        </button>
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        N<span className="underline">o</span>
                      </span>
                      2
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Title
                      </span>
                      Erwin Campbell
                    </td>

                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        News Location
                      </span>
                      ecampbell088@hotmail.com
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Content Category
                      </span>
                      318-685-X414
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Language Category
                      </span>
                      English
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="flex gap-2">
                        <span className="inline w-1/3 md:hidden font-bold">
                          Actions
                        </span>
                        <Link
                          href="editor/show"
                          className="bg-primary hover:bg-secondary text-white font-bold py-1 px-2 border border-primary hover:border-secondary rounded"
                        >
                          <BiShow />
                        </Link>
                        <Link
                          href="editor/editpost"
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                        >
                          <FiEdit />
                        </Link>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                          <MdDeleteForever />
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default posts;
