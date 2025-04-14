import Image from "next/image";
import Link from "next/link";

type playerType = {
  players: {
    id: number;
    name: string;
    age: number;
    position: string;
    image: string;
    description: string;
  };
};
const PlayerCard = ({ players }: playerType) => {
  const { name, position, age, image, id } = players;
  return (
    <Link href={`/football-ekadosh/${id}`}>
      <div className="rounded-xl p-4 shadow-xl w-full h-96 border border-gray-200">
        <Image
          src={image}
          alt="player image"
          width={400}
          height={250}
          className="w-full h-72 object-cover rounded-xl"
        />
        <div className="p-2">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold">
              {name} <span className="text-gray-900 text-sm">{age}</span>
            </h3>
            <p className="text-gray-800 font-bold">{position}</p>
          </div>
          {/* <div className="my-3">
            <h4 className="font-bold">Description:</h4>
            <p className="text-gray-700 text-sm font-semibold">{description}</p>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
