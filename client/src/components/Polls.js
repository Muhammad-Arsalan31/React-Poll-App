import React, { useContext } from "react";
import "./Polls.css";
import { PollContext } from "../context/PollContext";
import { PollDetails } from "./PollDetails";

export const Polls = () => {
  const { polls } = useContext(PollContext);

  return (
    <div
      className="grid grid-cols-2 gap-20 m-auto my-4"
      style={{ width: "800px" }}
    >
      {polls.map((poll) => {
        return <PollDetails poll={poll} key={poll.id} />;
      })}
    </div>
  );
};
