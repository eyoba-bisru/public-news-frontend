import Head from "next/head";
import { useRouter } from "next/router";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";

const Category = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.category}</title>
      </Head>
      <UserNavbar />
      <div className="w-full flex justify-center items-center">
        <div className="py-[46.8px] px-6 w-screen max-w-[1200px]">
          <div className="mt-4 gap-4 grid lg:grid-cols-2 place-content-center">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
          <div className="w-full grid place-content-center mt-8">
            <button className="bg-primary hover:bg-secondary text-white px-12 py-3 rounded-md">
              Load more
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
