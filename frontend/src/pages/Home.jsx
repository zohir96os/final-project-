import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=2`);
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
        }
      };
      fetchPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div>
      <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl ">Welcome to BlogOS</h1>
        <p className="text-gra-500 text-xs sm:text-sm ">
          Welcome to my blog, where stories meet exploration. Join me on a
          journey through a myriad of topics and experiences. Let`s dive into
          curiosity together and uncover the wonders that await.
        </p>
        <Link
          to="/search"
          className="text-sm sm:text-sm text-teal-500 font-bold hover:underline"
        >
          See all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 ">
            <h2 className="text-2xl font-semibold text-center ">
              Recent blogs
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              See all blogs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
