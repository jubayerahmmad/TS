import { footballPlayers } from "@/data/data";
import Image from "next/image";

// 📌 Type definition for a football player
export type playerType = {
  id: number;
  name: string;
  age: number;
  position: string;
  image: string;
  description: string;
};

const SinglePlayer = async ({ params }: { params: { id: number } }) => {
  // ⚠️ Even though 'id' is typed as a number, when coming from route params it's actually a string
  // So we must convert it using Number(id) to safely compare with numeric player IDs
  const { id } = await params;

  // ⚠️ .find() can return either a matching player or 'undefined' if no match is found
  // Therefore, we need to define the type as 'playerType | undefined'
  const findPlayer: playerType | undefined = footballPlayers.find(
    (player) => player.id === Number(id)
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl p-4 shadow-xl max-w-4xl h-[550px] border border-gray-300">
        {/* ⚠️ next/image does not accept 'undefined' as src 
            So we conditionally render <Image /> only if findPlayer exists */}
        {findPlayer && (
          <Image
            src={findPlayer.image}
            alt={findPlayer.name}
            width={400}
            height={250}
            className="w-full h-96 object-cover rounded-xl"
          />
        )}

        <div className="p-2">
          <div className="flex justify-between items-center">
            {/* ✅ Safe to use optional chaining here because we're only displaying values, other wise eslint will show findPlayer possibly is undefined */}
            <h3 className="text-3xl font-bold">
              {findPlayer?.name}{" "}
              <span className="text-gray-900 text-sm">{findPlayer?.age}</span>
            </h3>
            <p className="text-gray-800 font-bold">{findPlayer?.position}</p>
          </div>

          <div className="my-3">
            <h4 className="font-bold">Description:</h4>
            <p className="text-gray-700 text-sm font-semibold">
              {findPlayer?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
