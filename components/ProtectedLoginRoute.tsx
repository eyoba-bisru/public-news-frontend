import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedLoginRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  const routes = ["/auth/login", "/auth/signup", "/auth/forgot", "/auth/reset"];

  useEffect(() => {
    if (user) {
      if (routes.includes(router.pathname)) {
        if (user.role == "ADMIN") router.replace("/admin");
        if (user.role == "EDITOR") router.replace("/editor");
        if (user.role == "USER") router.replace("/");
      }
    }
  }, [router, user]);

  return (
    <>
      {!user && routes.includes(router.pathname)
        ? children
        : !routes.includes(router.pathname)
        ? children
        : null}
    </>
  );
};

export default ProtectedLoginRoute;
