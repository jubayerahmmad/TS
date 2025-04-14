import PlayerCard from "@/components/PlayerCard";
import { footballPlayers } from "@/data/data";

const FootballXI = () => {
  return (
    <div className="px-6 py-2">
      <h1 className="text-4xl font-bold text-center mb-2">Football 7-A Side</h1>
      <div className="grid grid-cols-3 gap-6 items-center">
        {footballPlayers.map((players) => (
          <PlayerCard key={players.id} players={players} />
        ))}
      </div>
    </div>
  );
};

export default FootballXI;
