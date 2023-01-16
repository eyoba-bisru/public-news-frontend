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

type Companies = {
  name: string;
  email: string;
  password: string;
  phone: string;
  shortName: string;
  logo: string;
  id: string;
}[];
type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  shortName: string;
  logo: string;
  id: string;
};

const company = () => {
  const [cname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [shortname, setShortname] = useState("");
  const [logo, setLogo] = useState("");
  const [companies, setCompanies] = useState<Companies>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState<User>({
    email: "",
    id: "",
    logo: "",
    name: "",
    password: "",
    phone: "",
    shortName: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await instance.get("/company/fetch");
      setCompanies(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", cname);
    formData.append("file", logo);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("shortName", shortname);
    formData.append("phoneNumber", phonenumber);

    try {
      if (!isEdit) {
        const { data } = await instance.post("/auth/registerEditor", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(data);
      } else {
        formData.append("id", user.id);
        formData.append("oldLogo", user.logo);
        formData.append("oldPassword", user.password);
        const { data } = await instance.patch("/company/update", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(data);
      }
      onClose();
      setName("");
      setEmail("");
      setPassword("");
      setShortname("");
      setPhonenumber("");
      setLogo("");

      const comps = await instance.get("/company/fetch");
      setCompanies(comps.data);
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
    setShortname(data.shortName);
    setEmail(data.email);
    setLogo(data.logo);
    setPhonenumber(data.phone);
  };
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
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
                setShortname("");
                setPhonenumber("");
                setLogo("");
                setIsEdit(false);
                onOpen();
              }}
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
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col justify-center items-center mt-4 gap-4"
                    >
                      <div className="flex w-full justify-center items-center gap-4">
                        <div className="flex flex-col items-center gap-4 w-2/5 jusitfy-center">
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
                              type="text"
                              borderColor="#4C230A"
                              placeholder="Company short name"
                              _focus={{ border: "none" }}
                              value={shortname}
                              onChange={(e) => setShortname(e.target.value)}
                              required
                            />
                          </InputGroup>
                        </div>
                        <div className="flex flex-col gap-4 w-2/5 items-center">
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
                          <InputGroup>
                            <Input
                              type="tel"
                              borderColor="#4C230A"
                              placeholder="Phone Number"
                              value={phonenumber}
                              onChange={(e) => setPhonenumber(e.target.value)}
                              _focus={{ border: "none" }}
                              required
                            />
                          </InputGroup>
                          <InputGroup>
                            <span className="mt-1 ml-4 text-gray-400">
                              Logo
                            </span>
                            <span className="sr-only"></span>
                            {isEdit ? (
                              <input
                                type="file"
                                accept="image/*"
                                // @ts-ignore
                                onChange={(e) => setLogo(e.target.files[0])}
                                className="ml-6 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                              />
                            ) : (
                              <input
                                type="file"
                                accept="image/*"
                                // @ts-ignore
                                onChange={(e) => setLogo(e.target.files[0])}
                                required
                                className="ml-6 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                              />
                            )}
                          </InputGroup>
                        </div>
                      </div>

                      {isEdit ? (
                        <Button
                          bg="green"
                          _hover={{ bg: "#green" }}
                          color="white"
                          width="40%"
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
                          width="40%"
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
            {companies?.map((company) => {
              return (
                <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Company Name
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
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Phone
                    </span>
                    {company.phone}
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

                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                        <BiBlock />
                      </button>
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

export default company;
