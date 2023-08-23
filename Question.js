import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import Answer from "./Answer";

const Headerf = (props) => {
  const [text, setText] = useState(props.title);
  const [textValue1, setTextValue1] = useState(props.shortnq);
  const [editMode, setEditMode] = useState(false);

  const [selectedOption, setSelectedOption] = useState(props.options);
  const [renderedElement, setRenderedElement] = useState(null); // Define the state variables
  const [renderedElement2, setRenderedElement2] = useState(null);
  const [renderedElement3, setRenderedElement3] = useState(null);
  const [typee, setTypee] = useState(props.options); //for type change

  useEffect(() => {
    handleOptionChange();
  }, []);
  //dropdown function

  const handleOptionChange = (event) => {
    const valueofselection = event ? event.target.value : selectedOption;
    if (
      valueofselection === "Answer Type" ||
      valueofselection === "multi" ||
      valueofselection === "choice"
    ) {
      setRenderedElement3(<Answer />);
      setRenderedElement(<Footer title="Yes" />);
      setRenderedElement2(<Footer title="No" />);
      // Clear the other element
    } else {
      setRenderedElement(null); // Clear both elements
      setRenderedElement2(null);
      setRenderedElement3(null);
    }
    setSelectedOption(valueofselection); // Update the selected option state
    setTypee(valueofselection);
  };

  const [selectedOption2, setSelectedOption2] = useState("");
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  //edit function
  const EditClick = () => {
    setEditMode(true);
  };

  // Function to handle changes in the text area
  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (event) => {
    setTextValue1(event.target.value);
  };

  // save function
  const SaveClick = () => {
    setEditMode(false);
  };

  return (
    <div>
      <hr />
      {editMode ? (
        <div className="flex items-center">
          <form>
            <p className="ml-14 mt-4">Question Text</p>
            <textarea
              className="border rounded-lg ml-14 p-2 mr-2 w-72 h-10"
              value={text}
              onChange={handleTextAreaChange}
            />
          </form>

          <form>
            <p className="mt-4">Short Text</p>
            <textarea
              className="border rounded-lg p-2 mr-2 w-20 h-10"
              value={textValue1}
              onChange={handleChange}
            />
          </form>

          {/* for type choice  */}
          <form>
            <p className="mt-5"></p>
            <div className="border rounded-lg p-2 mr-2 w-72 h-10">
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="Answer Type">Answer Type</option>
                <option value="text">text</option>
                <option value="multi">multi</option>
                <option value="choice">choice</option>
              </select>
            </div>
          </form>

          {/* for questions  */}
          <form>
            <p className="mt-5"></p>
            <div className="border rounded-lg w-72 h-10">
              <select value={selectedOption2} onChange={handleOptionChange2}>
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
            className="text-2xl bg-purple-600 mt-16 ml-2 mb-3 w-20 text-white"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <button
            onClick={EditClick}
            className="text-2xl bg-purple-600 mt-3 ml-16 mb-3 w-20 text-white"
          >
            Edit
          </button>
          {/* padding right left pl and pr */}
          <p className="  mt-4 ml-6 mr-35 mb-6 ">{text}</p>
          <p className="pl-96 ">
            type:
            {/* to make bold */}
            <span className="font-bold">{typee}</span>
          </p>
        </div>
      )}
      <div>{renderedElement}</div>
      <div>{renderedElement2}</div>
      <div>{renderedElement3}</div>
    </div>
  );
};

export default Headerf;
