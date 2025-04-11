import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white w-full flex flex-col justify-center items-center gap-6">
      <Link
        className="px-3 py-1.5 rounded-md hover:bg-gray-100 hover:text-gray-950 text-2xl font-bold duration-300"
        href={"/musics"}
      >
        Parallel Route Project
      </Link>
      <Link
        className="px-3 py-1.5 rounded-md hover:bg-gray-100 hover:text-gray-950 text-2xl font-bold duration-300"
        href={"/games"}
      >
        Intercepted Route Project
      </Link>
    </div>
  );
};

export default Home;
