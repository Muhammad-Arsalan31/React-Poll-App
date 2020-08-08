import React, { createContext, useReducer } from "react";
import PollReducer from "./PollReducer";

export const PollContext = createContext();

const initialState = {
  polls: [],
  errors: null,
  loading: true,
};

export const PollContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PollReducer, initialState);
  const addPoll = (poll) => {
    console.log(poll);
    dispatch({
      type: "ADD_POLL",
      payload: poll,
    });
  };
  const handleVote = (option, id) => {
    let copiedPolls = [...state.polls];
    let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
    if (option === "a") {
      upvotedPoll.voteA++;
      console.log(upvotedPoll, copiedPolls);
    }
    if (option === "b") {
      upvotedPoll.voteB++;
    }
    dispatch({
      type: "UPDATE_VOTE",
      payload: copiedPolls,
    });
  };
  const removePoll = (id) => {
    dispatch({
      type: "REMOVE_POLL",
      payload: id,
    });
  };
  return (
    <PollContext.Provider
      value={{ polls: state.polls, addPoll, handleVote, removePoll }}
    >
      {children}
    </PollContext.Provider>
  );
};
