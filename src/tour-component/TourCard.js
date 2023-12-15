import { useState } from "react";
import Card from "../Card";

export default function TourCard({ id, name, des, img, link, removeTour }) {
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
    <Card className="{id} w-[100vh] bg-gray-200 rounded-lg  p-5">
      <img src={img} alt="vict shown"></img>
      <a
        href={link}
        className="font-semibold text-blue-700 hover:underline"
        // target="_blank"
        title="Click to visit page"
      >
        {name}
      </a>
      <p className="p-3 ">
        {descrip}
        <span>{enableReadmore && "..."}</span>
        <span
          onClick={clickReadmoreHandler}
          className="text-blue-700 hover:text-red-500 underline"
        >
          {enableReadmore ? " read more" : " show less"}
        </span>
      </p>
      {/* onclick of this button we want to delete that card */}
      <div className="w-full flex justify-end">
        <button
          className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </Card>
  );
}
