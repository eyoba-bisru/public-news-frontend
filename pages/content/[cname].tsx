import Head from "next/head";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import Footer from "../../components/Footer";
import UserNavbar from "../../components/UserNavbar";
import instance from "../../lib/axiosInstance";
import axiosInstance from "../../lib/axiosInstance";
import { day, month, timeFunc, year } from "../../lib/timeConverter";

type Data = {
  posts: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    contentId: string;
    content: {
      name: string;
    };
    createdAt: Date;
    user: {
      shortName: string;
    };
  }[];
  count: number;
};

const Category = ({ data }: { data: Data }) => {
  const router = useRouter();
  const [allData, setAllData] = useState<Data>({ posts: [], count: 0 });

  useEffect(() => {
    setAllData(data);
  }, [router.query.cname]);

  async function handleLoadMore() {
    const { data: loadMore } = await instance.post("/post/loadMore", {
      contentId: allData.posts[0].contentId,
      id: allData.posts[allData.posts.length - 1].id,
    });
    setAllData((prev) => {
      return { ...prev, posts: [...prev.posts, ...loadMore] };
    });
  }

  console.log(allData);

  return (
    <>
      <Head>
        <title>{router.query.cname}</title>
      </Head>
      <UserNavbar />

      <div className="w-full flex justify-center items-center">
        <div className="py-[46.8px] px-6 w-screen max-w-[1200px]">
          {data.posts.length == 0 ? (
            <p className="text-center mt-10 text-3xl text-red-700">
              No news are posted in this category
            </p>
          ) : (
            <>
              <div className="mt-4 gap-4 grid lg:grid-cols-2 place-content-center">
                {allData.posts.map((d) => (
                  <Link key={d.id} href={`/detail/${d.id}`}>
                    <CategoryCard
                      description={d.description}
                      image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${d.imageUrl}`}
                      title={d.title}
                      time={timeFunc(d.createdAt)}
                      date={`${day(d.createdAt)} ${month(d.createdAt)} ${year(
                        d.createdAt
                      )}`}
                    />
                  </Link>
                ))}
              </div>
              {allData.count <= allData.posts.length ? (
                ""
              ) : (
                <div className="w-full grid place-content-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="bg-primary hover:bg-secondary text-white px-12 py-3 rounded-md"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(router: NextRouter) {
  const { data } = await axiosInstance.post<Data>("/post/contentPosts", {
    name: router.query.cname,
  });

  return { props: { data } };
}

export default Category;
