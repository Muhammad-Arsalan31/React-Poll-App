import React, { useContext } from "react";
import { PollContext } from "../context/PollContext";

export const PollDetails = ({ poll }) => {
  const { handleVote, removePoll } = useContext(PollContext);
  const totalVotes = poll.voteA + poll.voteB;
  const percentA = Math.floor((100 / totalVotes) * poll.voteA) + "%";
  const percentB = Math.floor((100 / totalVotes) * poll.voteB) + "%";

  return (
    <div className="poll">
      <h3>{poll.question}</h3>
      <p>Total votes : {totalVotes}</p>
      <div className="answer" onClick={() => handleVote("a", poll.id)}>
        <div className="percent percent-a" style={{ width: `${percentA}` }} />
        <span>
          {poll.answerA} ({poll.voteA})
        </span>
      </div>
      <div className="answer" onClick={() => handleVote("b", poll.id)}>
        <div className="percent percent-b" style={{ width: `${percentB}` }} />
        <span>
          {poll.answerB} ({poll.voteB})
        </span>
      </div>
      <button
        type="button"
        onClick={() => removePoll(poll.id)}
        className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Remove Poll
      </button>
    </div>
  );
};
