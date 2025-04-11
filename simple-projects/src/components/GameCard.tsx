import Image from "next/image";

type GameProps = {
  game: {
    id: number;
    name: string;
    img: string;
  };
};
const GameCard = ({ game }: GameProps) => {
  return (
    <div className="bg-gray-800  text-white p-4 rounded-lg shadow-md">
      <Image
        src={game.img}
        alt={game.name}
        width={500}
        height={200}
        className="w-[500px] h-[200px] object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{game.name}</h3>
    </div>
  );
};

export default GameCard;
