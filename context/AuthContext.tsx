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
  console.log(user);

  async function checkUser() {
    try {
      const { data } = await instance.get("/auth/session");
      setUser(data);
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
      return data;
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data);
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
      return data;
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      const { data: user } = await instance.delete("/auth/logout");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, logout, login }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
