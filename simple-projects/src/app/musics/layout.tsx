import { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
}) => {
  return (
    <div className="flex">
      <div>{sidebar}</div>
      <div className="grow p-4 text-white bg-slate-800">{songs}</div>
      <div>{children}</div>
    </div>
  );
};

export default MusicLayout;
