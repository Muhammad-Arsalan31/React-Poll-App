import React, { createContext, useReducer } from "react";
import PollReducer from "./PollReducer";

export const PollContext = createContext();

const initialState = {
  polls: [
    {
      id: 1,
      question: "Which programming language runs in browser?",
      answerA: "Javascript",
      answerB: "Python",
      voteA: 33,
      voteB: 22,
    },
    {
      id: 2,
      question: "Which programming language runs on backend ?",
      answerA: "Javascript",
      answerB: "Python",
      voteA: 33,
      voteB: 22,
    },
  ],
  errors: null,
  loading: true,
};

export const PollContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PollReducer, initialState);
  const addPoll = (poll) => {
    dispatch({
      type: "ADD_POLL",
      payload: poll,
    });
  };
  const handleVote = (option, id) => {
    let copiedPolls = [...state.polls];
    let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
    console.log(option, id);
    if (option === "a") {
      upvotedPoll.voteA++;
    }
    if (option === "b") {
      upvotedPoll.voteB++;
    }
    dispatch({
      type: "UPDATE_VOTE",
      payload: copiedPolls,
    });
  };
  return (
    <PollContext.Provider value={{ polls: state.polls, addPoll, handleVote }}>
      {children}
    </PollContext.Provider>
  );
};
