import React, { useContext } from "react";
import { PollContext } from "../context/PollContext";

export const PollDetails = ({ poll }) => {
  const { handleVote } = useContext(PollContext);
  const totalVotes = poll.voteA + poll.voteB;
  console.log(totalVotes);

  return (
    <div className="poll">
      <h3>{poll.question}</h3>
      <p>Total votes : {totalVotes}</p>
      <div className="answer" onChange={() => handleVote("a", poll.id)}>
        <div className="percent percent-a" style={{ width: "44%" }} />
        <span>
          {poll.answerA} ({poll.voteA})
        </span>
      </div>
      <div className="answer" onChange={() => handleVote("b", poll.id)}>
        <div className="percent percent-b" style={{ width: "44%" }} />
        <span>
          {poll.answerB} ({poll.voteB})
        </span>
      </div>
    </div>
  );
};
