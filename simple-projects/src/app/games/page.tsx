import Sidebar from "@/components/Sidebar";
import { games } from "../../db/games";
import GameCard from "@/components/GameCard";

const Games = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-800 p-5">
        <h1 className="text-2xl font-bold mb-4 text-white">Featured Games</h1>
        <div className="flex gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
