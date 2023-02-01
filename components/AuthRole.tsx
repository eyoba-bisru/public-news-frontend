import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthRole = ({ children }: { children: ReactNode }) => {
  const user = useAuth().user;
  const router = useRouter();
  const [permitted, setPermitted] = useState(true);

  useEffect(() => {
    console.log(router.asPath);
    if (user) {
      if (user.role == "EDITOR") {
        if (!router.asPath.includes("editor")) {
          setPermitted(false);
        }
      } else if (user.role == "ADMIN") {
        if (!router.asPath.includes("admin")) {
          setPermitted(false);
        }
      } else {
        if (
          router.asPath.includes("admin") ||
          router.asPath.includes("editor")
        ) {
          setPermitted(false);
        }
      }
    }
  }, []);

  if (permitted == false)
    return (
      <section className="flex items-center h-full p-16 dark:bg-background dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-secondary">
              <span className="sr-only">Error</span>403
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8 text-secondary">
              Forbidden
            </p>

            <Link
              rel="noopener noreferrer"
              href={
                user.role == "ADMIN"
                  ? "/admin"
                  : user.role == "EDITOR"
                  ? "/editor"
                  : "/"
              }
              className="px-8 py-3 font-semibold rounded dark:bg-primary dark:text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
  return <div>{children}</div>;
};

export default AuthRole;
