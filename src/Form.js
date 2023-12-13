import { useState } from "react";

export default function Form() {
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const [inputData, setInput] = useState("");
  return (
    <div>
      <label>
        First name:
        <input type="text" value={inputData} onChange={handleChange} />
      </label>
      {inputData !== "" && <p>You entered {inputData}</p>}
    </div>
  );
}
