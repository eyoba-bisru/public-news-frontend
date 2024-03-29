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
import { useEffect, useState } from "react";
import instance from "../../lib/axiosInstance";
import swal from "sweetalert";
import { useToast } from "@chakra-ui/react";
import { CgUnblock } from "react-icons/cg";

type Companies = {
  name: string;
  email: string;
  password: string;
  id: string;
  suspended: boolean;
}[];
type User = {
  name: string;
  email: string;
  password: string;
  id: string;
  suspended: boolean;
};

const Company = () => {
  const [cname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companies, setCompanies] = useState<Companies>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState<User>({
    email: "",
    id: "",
    name: "",
    password: "",
    suspended: false,
  });
  const [isEdit, setIsEdit] = useState(false);
  const toast = useToast();

  async function fetchData() {
    const { data } = await instance.get("/company/fetch");
    setCompanies(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSuspend = (id: string, suspended: boolean) => {
    swal({
      title: `Are you sure you want to ${suspended ? "unsuspend" : "suspend"}`,
      icon: "warning",
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await instance.post("/company/suspend", {
          id,
          suspended,
        });
        toast({
          // @ts-ignore
          title: suspended ? "Unsuspend success" : "Suspend success",
          variant: "left-accent",
          isClosable: true,
          status: "success",
          position: "bottom-left",
        });
        fetchData();
        // if (formik.values.selected === "content") {
        //   //@ts-ignore
        //   await instance.delete("/configuration/content", { data: { id } });
        // } else if (formik.values.selected === "language")
        //   //@ts-ignore
        //   await instance.delete("/configuration/language", { data: { id } });
        // //@ts-ignore
        // else await instance.delete("/configuration/location", { data: { id } });

        // setvalues(
        //   await instance.get(`/configuration/${formik.values.selected}s`)
        // );

        // formik.values.selected = 'content'
      }
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let dataToSend = {
      id: user.id,
      oldPassword: user.password,
      password,
      email,
      name: cname,
    };

    try {
      if (!isEdit) {
        const { data } = await instance.post(
          "/auth/registerEditor",
          dataToSend
        );
        console.log(data);
        toast({
          // @ts-ignore
          title: "Added successfully",
          variant: "left-accent",
          isClosable: true,
          status: "success",
          position: "bottom-left",
        });
      } else {
        const { data } = await instance.patch("/company/update", dataToSend);
        console.log(data);
        toast({
          // @ts-ignore
          title: "Edited successfully",
          variant: "left-accent",
          isClosable: true,
          status: "success",
          position: "bottom-left",
        });
      }
      onClose();
      setName("");
      setEmail("");
      setPassword("");

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id: string) => {
    const { data } = await instance.post("/company/fetchOne", {
      id,
    });

    setIsEdit(true);
    setUser(data);

    onOpen();

    // setPassword(data.password);
    setName(data.name);
    setEmail(data.email);
  };
  return (
    <SidebarWithHeader>
      <Head>
        <title>Company</title>
      </Head>
      <div className="flex flex-col gap-10 px-6 h-screen">
        <div className="flex justify-between items-center">
          <p className=" text-primary text-[23.165px] font-bold">Authors</p>
          <div>
            <div
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
                setIsEdit(false);
                onOpen();
              }}
              className="flex bg-primary gap-2 px-6 py-2 mr-14 rounded-md cursor-pointer"
            >
              <button className="text-white inline">Add</button>
              <AiFillPlusCircle className="text-white text-2xl" />
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent h="370px" maxW="32rem" marginBlock="36">
                <Box>
                  <ModalHeader className="text-primary text-[19.21px] text-center">
                    Add Authors
                  </ModalHeader>
                  <ModalCloseButton className="text-secondary" />
                  <ModalBody>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col justify-center items-center mt-4 gap-4"
                    >
                      <div className="flex flex-col items-center gap-4 w-4/5 jusitfy-center">
                        <InputGroup>
                          <Input
                            type="text"
                            className="w-full"
                            borderColor="#4C230A"
                            placeholder="Name"
                            value={cname}
                            onChange={(e) => setName(e.target.value)}
                            _focus={{ border: "none" }}
                            required
                          />
                        </InputGroup>
                        <InputGroup>
                          {isEdit ? (
                            <Input
                              type="password"
                              borderColor="#4C230A"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              _focus={{ border: "none" }}
                            />
                          ) : (
                            <Input
                              type="password"
                              borderColor="#4C230A"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              _focus={{ border: "none" }}
                              required
                            />
                          )}
                        </InputGroup>

                        <InputGroup>
                          <Input
                            type="email"
                            borderColor="#4C230A"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            _focus={{ border: "none" }}
                            required
                          />
                        </InputGroup>
                      </div>

                      {isEdit ? (
                        <Button
                          bg="green"
                          _hover={{ bg: "#green" }}
                          color="white"
                          width="60%"
                          paddingY="5"
                          type="submit"
                        >
                          Edit
                        </Button>
                      ) : (
                        <Button
                          bg="#4C230A"
                          _hover={{ bg: "#A53F2B" }}
                          color="white"
                          width="60%"
                          paddingY="5"
                          type="submit"
                        >
                          Add
                        </Button>
                      )}
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
                Author name
              </th>

              <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email Address
              </th>

              <th className="bg-primary p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {companies?.map((company) => {
              return (
                <tr
                  key={company.id}
                  className="bg-white border border-grey-500 md:border-none block md:table-row"
                >
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Author Name
                    </span>
                    {company.name}
                  </td>

                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Email Address
                    </span>
                    {company.email}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="flex gap-2">
                      <span className="inline w-1/3 md:hidden font-bold">
                        Actions
                      </span>

                      <button
                        onClick={() => handleEdit(company.id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                      >
                        <FiEdit />
                      </button>

                      {company.suspended ? (
                        <button
                          onClick={() =>
                            handleSuspend(company.id, company.suspended)
                          }
                          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 border border-yellow-500 rounded"
                        >
                          <CgUnblock />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleSuspend(company.id, company.suspended)
                          }
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                        >
                          <BiBlock />
                        </button>
                      )}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SidebarWithHeader>
  );
};

export default Company;
