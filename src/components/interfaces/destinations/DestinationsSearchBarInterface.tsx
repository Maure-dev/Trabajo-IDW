import { Link } from "react-router-dom";
import { DestinationsSearchBarPropsType } from "../../../entities/entities";
import { ChangeEvent } from "react";

export default function DestinationsSearchBarInterface({
  setSearchTerm,
}: DestinationsSearchBarPropsType) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#e4215380] border-4 border-[#e42153] py-4 px-8 rounded-2xl lg:rounded-full w-full lg:w-3/4">
      <input
        type="text"
        className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4 w-full"
        placeholder="¿Dónde vamos?"
        name="search"
        id="search"
        onChange={handleInputChange}
      />
      <input
        type="date"
        className="cursor-pointer lg:w-52 rounded-lg p-4 mb-4 lg:mb-0 lg:mr-4"
        placeholder="Elige una fecha"
        name="date"
        id="date"
      />
      <Link
        to="/destinations"
        className="flex items-center font-semibold text-white border-2 border-[#03cf74] hover:border-white rounded-full text-2xl bg-[#03cf74] p-2 uppercase"
      >
        <span className="material-icons mr-2">flight_takeoff</span>
        <span>Vamos!</span>
      </Link>
    </div>
  );
}
