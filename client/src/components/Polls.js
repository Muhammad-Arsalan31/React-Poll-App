import React, { useContext } from "react";
import "./Polls.css";
import { PollContext } from "../context/PollContext";
import { PollDetails } from "./PollDetails";

export const Polls = () => {
  const { polls } = useContext(PollContext);

  return polls.length ? (
    <div
      className="grid grid-cols-2 gap-20 m-auto my-4"
      style={{ width: "800px" }}
    >
      {polls.map((poll) => {
        return <PollDetails poll={poll} key={poll.id} />;
      })}
    </div>
  ) : (
    <div className="text-center text-2xl text-gray-600 mt-4">
      There are no polls to vote
    </div>
  );
};
