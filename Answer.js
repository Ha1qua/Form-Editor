import React, { useState } from "react";

const Answer = () => {
  const [text, setText] = useState();
  const [textValue1, setTextValue1] = useState();
  const [selectedOption2, setSelectedOption2] = useState();
  const [addingAnswer, setAddingAnswer] = useState(false);

  const Answers = () => {
    setAddingAnswer(true);
  };

  const [editing, setEditing] = useState(false);
  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (event) => {
    setTextValue1(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const SaveClick = () => {
    setAddingAnswer(false);
  };

  return (
    <div>
      {!addingAnswer ? (
        <button
          onClick={Answers}
          className="text-2xl bg-purple-600 mt-3 ml-20 mb-3 w-60 text-white"
        >
          Add Answer
        </button>
      ) : (
        // Show the set of elements when adding answer
        <div className="flex items-center">
          <form>
            <p className="ml-28 mt-4">Answer Text</p>
            <textarea
              className="border rounded-lg ml-28 p-2 mr-2 w-72 h-10"
              placeholder="Enter your question"
              value={text}
              onChange={handleTextAreaChange}
            />
          </form>

          <form>
            <p className="ml-30 mt-4">Short Text</p>
            <textarea
              className="border rounded-lg p-2 mr-2 w-20 h-10"
              value={textValue1}
              onChange={handleChange}
            />
          </form>

          {/* for questions */}
          <form>
            <p className="ml-4 mt-4">Next Question</p>
            <div className="border rounded-lg w-72 h-10">
              <select value={selectedOption2} onChange={handleOptionChange2}>
                <option value="">--choose next question--</option>
                <option value="option1">Do you have any fever?</option>
                <option value="option2">Do you have temperature?</option>
                <option value="option3">Do you have fatigue?</option>
                <option value="option4">Describe your problem?</option>
              </select>
            </div>
          </form>

          <button
            onClick={SaveClick}
            className="text-2xl bg-purple-600 mt-16 ml-2 mb-3 w-20 text-white"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Answer;
