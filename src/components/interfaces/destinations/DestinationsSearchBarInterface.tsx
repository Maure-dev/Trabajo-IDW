import { DestinationsSearchBarPropsType } from "../../../entities/entities";
import { ChangeEvent } from "react";

export default function DestinationsSearchBarInterface({
  setSearchTerm,
  setSearchPriceMin,
  setSearchPriceMax,
  setSearchBathrooms,
  setSearchBedrooms,
  setSearchEstado,
  setSearchTipoAlojamiento,
  estados,
  tiposAlojamientos,
}: DestinationsSearchBarPropsType) {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "search":
        setSearchTerm(value);
        break;
      case "searchPriceMin":
        setSearchPriceMin(Number(value));
        break;
      case "searchPriceMax":
        setSearchPriceMax(Number(value));
        break;
      case "searchBathrooms":
        setSearchBathrooms(Number(value));
        break;
      case "searchBedrooms":
        setSearchBedrooms(Number(value));
        break;
      case "selectEstado":
        setSearchEstado(value);
        break;
      case "selectTipoAlojamiento":
        setSearchTipoAlojamiento(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#e4215380] border-4 border-[#e42153] py-4 px-8 rounded-2xl w-full lg:w-3/4">
      <div className="flex items-center justify-center w-full mb-4">
        <input
          type="text"
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4 w-full"
          placeholder="¿Dónde vamos?"
          name="search"
          id="search"
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4"
          placeholder="Precio minimo"
          name="searchPriceMin"
          id="searchPriceMin"
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4"
          placeholder="Precio Maximo"
          name="searchPriceMax"
          id="searchPriceMax"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center w-full">
        <input
          type="number"
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4"
          placeholder="Cantidad de Baños"
          name="searchBathrooms"
          id="searchBathrooms"
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4"
          placeholder="Cantidad de Dormitorios"
          name="searchBedrooms"
          id="searchBedrooms"
          onChange={handleInputChange}
        />
        <select
          name="selectEstado"
          onChange={handleInputChange}
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4 bg-white"
        >
          <option value="">Estado del Hospedaje</option>
          {estados.map((estado, index) => (
            <option key={index} value={estado}>
              {estado}
            </option>
          ))}
        </select>
        <select
          name="selectTipoAlojamiento"
          onChange={handleInputChange}
          className="p-4 rounded-lg mb-4 lg:mb-0 lg:mr-4 bg-white"
        >
          <option value="">Tipo del Alojamiento</option>
          {tiposAlojamientos.map((tipo, index) => (
            <option key={index} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
