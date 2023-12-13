import { useState } from "react";

export default function Form() {
  // handle any input on enter of each character
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  //onpress of clear button remove all from input
  const handleClear = () => {
    setInput("");
  };
  const [inputData, setInput] = useState("");
  return (
    <div>
      <label>
        First name:
        <input
          type="text"
          value={inputData}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border-solid border-black border-[2px]"
        />
        <button
          className="m-1 p-2 bg-gray-500 text-white "
          onClick={handleClear}
        >
          clear
        </button>
      </label>

      {inputData !== "" && <p>You entered {inputData}</p>}
    </div>
  );
}
