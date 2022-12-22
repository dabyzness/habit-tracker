import React, { useEffect, useState } from "react";

export type TileProps = {
  color?: string;
  day: number;
  streak: number;
};

// TODO: Change color based on streak -- currently it changes by index value and has no meaning

const Tile: React.FC<TileProps> = (props) => {
  const [color, setColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    switch (props.streak) {
      case 0:
        setColor(undefined);
        break;
      case 1:
        setColor(`rgb(253,253,237)`);
        break;
      case 2:
        setColor(`rgb(251,249,198)`);
        break;
      case 3:
        setColor(`rgb(251,246,163`);
        break;
      case 4:
        setColor(`rgb(250,243,124)`);
        break;
      case 5:
        setColor(`rgb(249,239,75)`);
        break;
      default:
        setColor(`rgb(248,225,17)`);
        break;
    }
  }, [props.streak]);

  // ${props.color ? "rgb(255,255,0)" : "grey"}

  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: color,
        border: `2px solid ${color}`,
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
      }}
    >
      {!props.color && <span style={{ fontSize: "1.5rem" }}>{props.day}</span>}
    </div>
  );
};

export default Tile;
