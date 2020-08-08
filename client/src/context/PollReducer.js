export default (state, action) => {
  switch (action.type) {
    case "ADD_POLL":
      return {
        ...state,
        polls: [...state.polls, action.payload],
      };
    case "UPDATE_VOTE":
      return { polls: action.payload };
    case "REMOVE_POLL":
      return {
        ...state,
        polls: state.polls.filter((poll) => poll.id !== action.payload),
      };
    default:
      return state;
  }
};
