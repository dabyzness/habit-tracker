import React from "react";
import Tile from "./Tile";

export type TileGridProps = {
  baseColor: string;
  days: number[];
  streaks: number[];
};

const TileGrid: React.FC<TileGridProps> = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "4px",
        gridTemplateColumns: "repeat(7, max-content)",
      }}
    >
      {props.days.map((day: number, i: number) => (
        <Tile
          key={i}
          color={props.streaks[i] ? props.baseColor : undefined}
          streak={props.streaks[i]}
          day={day}
        />
      ))}
    </div>
  );
};

export default TileGrid;
