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

  //onclick of refresh button restore data
  function refresh() {
    setdataTour(tours);
  }
  return (
    <div>
      <h1>Using React component displaying Tour places</h1>
      {dataTour.length !== 0 && (
        <p >
          Total Tours showing <span>{dataTour.length}</span>
        </p>
      )}
      {/* make refresh button appear only when no data is left to be shown */}
      {dataTour.length === 0 && <button onClick={refresh}>Refresh</button>}
      <div className="flex flex-col gap-[1.5rem]">
        {dataTour.map((data) => {
          return <TourCard {...data} removeTour={removeTour}></TourCard>;
        })}
      </div>
    </div>
  );
}
