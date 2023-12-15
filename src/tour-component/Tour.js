import { useState } from "react";
import tours from "./data";
import TourCard from "./TourCard.js";

export default function Tour() {
  const [dataTour, setdataTour] = useState(tours);

  //receiving prop from child(child->parent) : lifting up
  function removeTour(id) {
    const tourAfterRemove = dataTour.filter((d) => d.id !== id);
    console.log(tourAfterRemove);
    setdataTour(tourAfterRemove);
  }
  return (
    <div className="flex flex-col gap-[1.5rem]">
      {dataTour.map((data) => {
        return <TourCard {...data} removeTour={removeTour}></TourCard>;
      })}
    </div>
  );
}
