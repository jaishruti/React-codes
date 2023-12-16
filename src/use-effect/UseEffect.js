import { useEffect, useState } from "react";

//exploring use effect to handle side effects
//apart from component
export default function UseEffect() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Shruti Jaiswal");

  //letsimplement useEffect -> every render(has performs and stabilty issue)
  //once our component is loaded, useEffect starts executing
  //   useEffect(() => {
  //     console.log("UI change");
  //   });

  //   variation 1
  //   useEffect(() => {
  //     console.log("UI change");
  //   }, []);

  //   variation 2
  //once our component is loaded, useEffect starts executing
  //whenever there is a change it runs
  //   useEffect(() => {
  //     console.log("UI change");
  //   }, [text]); //second parameter is the dependency list

  //variation 3-> when dependency changes
  //   useEffect(() => {
  //     console.log("Name changed");
  //   }, [name]);

  // variation->4 : handle unmounting of a component
  //   after every render if we add addEventListener
  // multiple listeners will get attached
  useEffect(() => {
    // add event listener
  });

  const clickHandler = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  return (
    <div className="border-2 border-solid border-black rounded-sm">
      <input type="text" value={text} onChange={clickHandler} />
    </div>
  );
}
