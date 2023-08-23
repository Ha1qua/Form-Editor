// import React from "react";
import React, { useState } from "react";
const Footer = (props) => {
  const [text, setText] = useState(props.title);
  const [editMode, setEditMode] = useState(false);
  const [text2, setText2] = useState(); //for short text of yes and no

  ////for questions//
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  //edit function
  const EditClick = () => {
    setEditMode(true);
  };

  // Function to handle changes in the text area
  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  //for shrt text yes
  const handleChange = (event) => {
    setText2(event.target.value);
  };
  // save function
  const SaveClick = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <div className="flex items-center">
          <form>
            <p className="ml-28 mt-4">Answer Text</p>
            <textarea
              value={text}
              className="border rounded-lg ml-28 p-2 mr-2 w-72 h-10"
              onChange={handleTextAreaChange}
            />
          </form>
          <form>
            <p className="ml-30 mt-4">Short Text</p>
            <textarea
              value={text2}
              className="border rounded-lg p-2 mr-2 w-40 h-10"
              onChange={handleChange}
            />
          </form>

          <form>
            <p className="ml-4 mt-4">Next Question</p>
            <div className="border rounded-lg w-72 h-10">
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">--choose noext question--</option>
                <option value="option1">Do you have any fever?</option>
                <option value="option2">Do you have temperature?</option>
                <option value="option3">Do you have fatigue?</option>
                <option value="option3">Describe your problem?</option>
              </select>
            </div>
          </form>
          <button
            onClick={SaveClick}
            className="bg-purple-500 text-white  mt-12 w-12 ml-4"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>
            <button
              onClick={EditClick}
              className="text-1xl bg-purple-600 mt-1 ml-32 mb-3 w-12 mr-8 text-white"
            >
              Edit
            </button>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
