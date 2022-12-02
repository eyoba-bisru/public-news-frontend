import Head from "next/head";
import UserNavbar from "../../components/UserNavbar";

const Login = () => {
  return (
    <div className="max-w-[1440px]">
      <Head>
        <title>Login</title>
      </Head>
      <UserNavbar />
      <div>Login</div>
    </div>
  );
};

export default Login;
