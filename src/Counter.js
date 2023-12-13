import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function clickHandlerInc() {
    setCount(count + 1);
  }
  const clickHandlerDec = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex gap-5 justify-center p-1 bg-black text-white">
      <button onClick={clickHandlerInc}>+</button>
      <p className="w-3 text-xl">{count}</p>
      <button onClick={clickHandlerDec}>-</button>
    </div>
  );
}
