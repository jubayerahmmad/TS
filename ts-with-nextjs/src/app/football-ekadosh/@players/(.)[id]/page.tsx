import { footballPlayers } from "@/data/data";
import { playerType } from "../../[id]/page";
import Image from "next/image";

const InterceptedPlayer = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const findPlayer: playerType | undefined = footballPlayers.find(
    (player) => player.id === Number(id)
  );
  return (
    <div className="flex items-center justify-center inset-0 fixed bg-gray-900/50">
      {/* inset-0 → top: 0; right: 0; bottom: 0; left: 0;
         Used with absolute or fixed elements to fully cover a parent. */}
      <div className="rounded-xl p-4 shadow-xl max-w-4xl bg-white border border-gray-50/50">
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
            <h3 className="text-3xl font-bold">
              {findPlayer?.name}{" "}
              <span className="text-gray-800 text-sm">{findPlayer?.age}</span>
            </h3>
            <p className="text-gray-800 font-bold">{findPlayer?.position}</p>
          </div>

          <div className="my-3">
            <h4 className="font-bold">Description:</h4>
            <p className="text-gray-900 text-sm font-semibold">
              {findPlayer?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterceptedPlayer;
