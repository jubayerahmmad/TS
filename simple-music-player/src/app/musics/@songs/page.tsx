import { Clock, Heart, LucideMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Songs = () => {
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      time: "3:20",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      time: "4:24",
    },
    {
      id: 3,
      title: "Bad Guy",
      artist: "Billie Eilish",
      time: "3:14",
    },
    {
      id: 4,
      title: "Levitating",
      artist: "Dua Lipa",
      time: "3:23",
    },
    {
      id: 5,
      title: "Someone You Loved",
      artist: "Lewis Capaldi",
      time: "3:02",
    },
  ];

  return (
    <section className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center">Songs Collection</h2>

      <ul className="space-y-6 my-6">
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li className="flex justify-between items-center p-2 hover:bg-[#2A2929] rounded-md cursor-pointer hover:scale-105 duration-300">
              <div className="flex items-center gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Music Cover"
                  className="rounded-xl"
                  height={100}
                  width={100}
                />
                <div>
                  <h3 className="text-lg font-bold">{song.title}</h3>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 px-4">
                <p className="flex items-center gap-2">
                  <Clock size={16} /> {song.time}
                </p>
                <Heart size={16} />
                <LucideMenu size={16} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Songs;
