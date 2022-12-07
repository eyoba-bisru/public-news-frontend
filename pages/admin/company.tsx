import SidebarWithHeader from "../../components/Sidenav";
import { FiEdit } from "react-icons/fi";
import {
  Modal,
  Button,
  Box,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import Head from "next/head";
const company = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SidebarWithHeader>
      <Head>
        <title>Company</title>
      </Head>
      <div className="flex flex-col gap-10 px-6 h-screen">
        <div className="flex justify-between items-center">
          <p className=" text-primary text-[23.165px] font-bold">
            News Companies
          </p>
          <div>
            <div
              onClick={onOpen}
              className="flex bg-primary gap-2 px-6 py-2 mr-14 rounded-md cursor-pointer"
            >
              <button className="text-white inline">Add</button>
              <AiFillPlusCircle className="text-white text-2xl" />
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent h="370px" maxW="52rem" marginBlock="36">
                <Box>
                  <ModalHeader className="text-primary text-[19.21px] text-center">
                    Add News Company
                  </ModalHeader>
                  <ModalCloseButton className="text-secondary" />
                  <ModalBody>
                    <form className="flex flex-col justify-center items-center mt-4 gap-4">
                      <div className="flex w-full justify-center items-center gap-4">
                        <div className="flex flex-col items-center gap-4 w-2/5 jusitfy-center">
                          <InputGroup>
                            <Input
                              type="text"
                              className="w-full"
                              borderColor="#4C230A"
                              placeholder="Name"
                              _focus={{ border: "none" }}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Input
                              type="password"
                              borderColor="#4C230A"
                              placeholder="Password"
                              _focus={{ border: "none" }}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Input
                              type="text"
                              borderColor="#4C230A"
                              placeholder="Company short name"
                              _focus={{ border: "none" }}
                            />
                          </InputGroup>
                        </div>
                        <div className="flex flex-col gap-4 w-2/5 items-center">
                          <InputGroup>
                            <Input
                              type="email"
                              borderColor="#4C230A"
                              placeholder="Email"
                              _focus={{ border: "none" }}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Input
                              type="tel"
                              borderColor="#4C230A"
                              placeholder="Phone Number"
                              _focus={{ border: "none" }}
                            />
                          </InputGroup>
                          <InputGroup>
                            <span className="mt-1 ml-4 text-gray-400">
                              Logo
                            </span>
                            <span className="sr-only"></span>
                            <input
                              type="file"
                              className="ml-6 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                            />
                          </InputGroup>
                        </div>
                      </div>

                      <Button
                        bg="#4C230A"
                        _hover={{ bg: "#A53F2B" }}
                        color="white"
                        width="40%"
                        paddingY="5"
                      >
                        Add
                      </Button>
                    </form>
                  </ModalBody>
                </Box>
              </ModalContent>
            </Modal>
          </div>
        </div>

        <table className="min-w-full border-collapse block md:table ">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-primary p-2 text-white  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Company Name
              </th>

              <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email Address
              </th>
              <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Phone
              </th>
              <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
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
                    <BiBlock />
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
                    <BiBlock />
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
