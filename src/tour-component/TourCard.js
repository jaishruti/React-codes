import { useState } from "react";
import Card from "../Card";

export default function TourCard({ id, name, des, img, removeTour }) {
  const [enableReadmore, setReadmore] = useState(true);
  const [descrip, setDescrip] = useState(des.substring(0, 200));

  //handles the readmore click
  const clickReadmoreHandler = () => {
    setReadmore(!enableReadmore);
    if (enableReadmore === true) {
      setDescrip(des);
    } else {
      setDescrip(des.substring(0, 200));
    }
  };

  //   const remove = () => {
  //     props.func(id);
  //   };
  return (
    <Card className="{img} w-[100vh] ">
      <img
        src="../assests/birla-planetarium.jpg"
        alt="vict shown"
        width={100}
      ></img>
      <h1>{name}</h1>
      <p>
        {descrip}
        <span>{enableReadmore && "..."}</span>
        <span onClick={clickReadmoreHandler}>
          {enableReadmore ? "read more" : "show less"}
        </span>
      </p>
      {/* onclick of this button we want to delete that card */}
      <button onClick={() => removeTour(id)}>Not interested</button>
    </Card>
  );
}
