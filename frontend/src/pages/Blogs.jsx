import CallToAction from "../components/CallToAction";

const Blogs = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Blogs</h1>
      <p className="text-md text-gray-500 ">
        Blogs are online platforms where people share their thoughts, expertise,
        and experiences on various topics, fostering community and discussion
        around shared interests.
      </p>
      <CallToAction />
    </div>
  );
};

export default Blogs;
