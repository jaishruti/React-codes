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
    <div className="flex flex-col items-center p-2">
      <h1 className="text-red-700 font-semibold">
        Using React component displaying Tour places
      </h1>
      {dataTour.length !== 0 && (
        <p className="border-2 border-black border-dashed p-3 font-bold">
          Total Tours showing <span>{dataTour.length}</span>
        </p>
      )}
      {/* make refresh button appear only when no data is left to be shown */}
      {dataTour.length === 0 && (
        <button onClick={refresh} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Refresh
        </button>
      )}
      <div className="flex flex-col gap-[1.5rem] mt-4">
        {dataTour.map((data) => {
          return <TourCard {...data} removeTour={removeTour}></TourCard>;
        })}
      </div>
    </div>
  );
}
