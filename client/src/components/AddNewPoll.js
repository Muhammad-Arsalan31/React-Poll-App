import React, { useContext, useState } from "react";
import { PollContext } from "../context/PollContext";
import { useHistory } from "react-router-dom";

export const AddNewPoll = () => {
  let history = useHistory();
  const { addPoll } = useContext(PollContext);
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoll = {
      id: Math.random(),
      question: question,
      answerA: answerA,
      answerB: answerB,
      voteA: 0,
      voteB: 0,
    };
    addPoll(newPoll);
    history.push("/");
    // <Redirect to="/" />;
  };
  return (
    <div className="w-auto mx-auto my-10 " style={{ width: "400px" }}>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-2 pt-6 pb-8 my-2"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Question"
          >
            Question
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Question"
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Answer A"
          >
            Answer A
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Answer A"
            type="text"
            placeholder="Answer A"
            value={answerA}
            onChange={(e) => setAnswerA(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Answer B"
          >
            Answer B
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Answer B"
            type="text"
            placeholder="Answer B"
            value={answerB}
            onChange={(e) => setAnswerB(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 w-full hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Add Poll"
          />
        </div>
      </form>
    </div>
  );
};
