import { useState } from "react";
import {
  AdministrationAccommodationTablePropsType,
  AdministrationAccommodation,
} from "../../../../entities/entities";
import AdministrationRowInterface from "./AdministrationRowInterface";

type SortDirection = "asc" | "desc";

export default function AdministrationTableInterface({
  Alojamientos,
  handleEdit,
  handleDelete,
}: AdministrationAccommodationTablePropsType) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof AdministrationAccommodation;
    direction: SortDirection;
  }>({
    key: "idAlojamiento",
    direction: "asc",
  });

  const requestSort = (key: keyof AdministrationAccommodation) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedAlojamientos = [...Alojamientos].sort((a, b) => {
    const { key, direction } = sortConfig;
    const aValue = a[key];
    const bValue = b[key];

    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return 1;
    if (bValue === undefined) return -1;

    if (direction === "asc") {
      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      }
      return (aValue as number) - (bValue as number);
    } else {
      if (typeof aValue === "string" && typeof bValue === "string") {
        return bValue.localeCompare(aValue);
      }
      return (bValue as number) - (aValue as number);
    }
  });

  const getArrowIcon = (columnKey: keyof AdministrationAccommodation) => {
    if (sortConfig.key === columnKey) {
      return sortConfig.direction === "asc" ? (
        <span className="material-icons">expand_less</span>
      ) : (
        <span className="material-icons">expand_more</span>
      );
    }
    return null;
  };

  return (
    <div className="w-full border-4 border-[#e42153] bg-[#e4215380] rounded-2xl p-4 overflow-y-auto">
      <table className="w-full border-4 border-white">
        <thead>
          <tr>
            <th className="border-4 border-white p-2 text-white text-lg text-center">
              ID
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("Titulo")}
            >
              <div className="flex items-center">
                Título {getArrowIcon("Titulo")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("Descripcion")}
            >
              <div className="flex items-center">
                Descripción {getArrowIcon("Descripcion")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("TipoAlojamiento")}
            >
              <div className="flex items-center">
                Tipo de alojamiento {getArrowIcon("TipoAlojamiento")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("Latitud")}
            >
              <div className="flex items-center">
                Latitud {getArrowIcon("Latitud")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("Longitud")}
            >
              <div className="flex items-center">
                Longitud {getArrowIcon("Longitud")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("PrecioPorDia")}
            >
              <div className="flex items-center">
                Precio por día {getArrowIcon("PrecioPorDia")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("CantidadDormitorios")}
            >
              <div className="flex items-center">
                Cantidad de dormitorios {getArrowIcon("CantidadDormitorios")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("CantidadBanios")}
            >
              <div className="flex items-center">
                Cantidad de baños {getArrowIcon("CantidadBanios")}
              </div>
            </th>
            <th
              className="border-4 border-white p-2 text-white text-lg text-left cursor-pointer"
              onClick={() => requestSort("Estado")}
            >
              <div className="flex items-center">
                Estado {getArrowIcon("Estado")}
              </div>
            </th>
            <th className="border-4 border-white p-2 text-white text-lg">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAlojamientos.map((Alojamiento) => (
            <AdministrationRowInterface
              key={Alojamiento.idAlojamiento}
              alojamiento={Alojamiento}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      {sortedAlojamientos.length === 0 && (
        <h1 className="p-8 text-center text-white font-bold text-2xl w-full">
          No hay registros de "Alojamiento"
        </h1>
      )}
    </div>
  );
}
