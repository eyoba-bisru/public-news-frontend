import Head from "next/head";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import CategoryCard from "../../components/CategoryCard";
import Footer from "../../components/Footer";
import UserNavbar from "../../components/UserNavbar";
import axiosInstance from "../../lib/axiosInstance";
import { day, month, timeFunc, year } from "../../lib/timeConverter";

type Data = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  contentId: string;
  language: {
    name: string;
  };
  createdAt: Date;
  user: {
    shortName: string;
  };
}[];

const Category = ({ data }: { data: Data }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.loname}</title>
      </Head>
      <UserNavbar />

      <div className="w-full flex justify-center items-center">
        <div className="py-[46.8px] px-6 w-screen max-w-[1200px]">
          {data.length == 0 ? (
            <p className="text-center mt-10 text-3xl text-red-700">
              No news are posted in this category
            </p>
          ) : (
            <>
              <div className="mt-4 gap-4 grid lg:grid-cols-2 place-content-center">
                {data.map((d) => (
                  <Link key={d.id} href={`/detail/${d.id}`}>
                    <CategoryCard
                      company={d.user?.shortName}
                      description={d.description}
                      image={d.imageUrl}
                      title={d.title}
                      time={timeFunc(d.createdAt)}
                      date={`${day(d.createdAt)} ${month(d.createdAt)} ${year(
                        d.createdAt
                      )}`}
                    />
                  </Link>
                ))}
              </div>
              <div className="w-full grid place-content-center mt-8">
                <button className="bg-primary hover:bg-secondary text-white px-12 py-3 rounded-md">
                  Load more
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(router: NextRouter) {
  const { data } = await axiosInstance.post<Data>("/post/locationPosts", {
    name: router.query.loname,
  });

  return { props: { data } };
}

export default Category;
