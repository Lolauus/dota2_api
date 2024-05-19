import React from "react";

export default function PlayerInfo({ info }) {
  return (
    <>
      Player result:
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </>
  );
}
