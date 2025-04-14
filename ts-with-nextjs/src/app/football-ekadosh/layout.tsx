import { ReactNode } from "react";

const PlayerLayout = ({
  children,
  players,
}: {
  children: ReactNode;
  players: ReactNode;
}) => {
  return (
    <div>
      {children}
      {players}
    </div>
  );
};

export default PlayerLayout;
