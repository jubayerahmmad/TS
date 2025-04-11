import { Clock, Home, TrendingUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="flex justify-between flex-col bg-black p-4 w-64 min-h-screen text-white">
      <section>
        <h2 className="text-3xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#171717] cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#171717] cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#171717] cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default Sidebar;
