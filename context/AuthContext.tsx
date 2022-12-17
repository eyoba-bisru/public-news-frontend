import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import instance from "../lib/axiosInstance";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const toast = useToast();

  console.log(user);

  async function checkUser() {
    try {
      const { data } = await instance.get("/auth/session");
      setUser(data);
      // if (data.role == "ADMIN") router.replace("/admin");
      // else if (data.role == "EDITOR") router.replace("/editor");
      // else if (data.role == "USER") router.replace("/");
    } catch (error) {
      console.log(error);
      setUser(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    checkUser();
  }, []);

  const signup = async (
    email: string,
    password: string,
    name: string,
    resetForm: any
  ) => {
    try {
      const { data } = await instance.post("/auth/signup", {
        name,
        password,
        email,
      });
      resetForm();
      setUser(data);
      toast({
        title: "Account created successfully",
        variant: "left-accent",
        isClosable: true,
        status: "success",
        position: "bottom-left",
      });
      if (data.role == "ADMIN") router.replace("/admin");
      else if (data.role == "EDITOR") router.replace("/editor");
      else if (data.role == "USER") router.replace("/");
      return data;
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data);
      toast({
        // @ts-ignore
        title: error.response.data,
        variant: "left-accent",
        isClosable: true,
        status: "error",
        position: "bottom-left",
      });
    }
  };

  const login = async (email: string, password: string, resetForm: any) => {
    try {
      const { data } = await instance.post("/auth/login", {
        password,
        email,
      });
      resetForm();
      setUser(data);
      toast({
        title: "Logged in successfully",
        variant: "left-accent",
        isClosable: true,
        status: "success",
        position: "bottom-left",
      });
      if (data.role == "ADMIN") router.replace("/admin");
      else if (data.role == "EDITOR") router.replace("/editor");
      else if (data.role == "USER") router.replace("/");
      return data;
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data);

      toast({
        // @ts-ignore
        title: error.response.data,
        variant: "left-accent",
        isClosable: true,
        status: "error",
        position: "bottom-left",
      });
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      const { data: user } = await instance.delete("/auth/logout");
      console.log(user);
      toast({
        title: "Logged out successfully",
        variant: "left-accent",
        isClosable: true,
        status: "success",
        position: "bottom-left",
      });
    } catch (error) {
      console.log(error);

      toast({
        // @ts-ignore
        title: error.response.data,
        variant: "left-accent",
        isClosable: true,
        status: "error",
        position: "bottom-left",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, logout, login }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
