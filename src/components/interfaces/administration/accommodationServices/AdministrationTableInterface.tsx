import { AdministrationAccommodationServicesTablePropsType } from "../../../../entities/entities";
import AdministrationRowInterface from "./AdministrationRowInterface";

export default function AdministrationTableInterface({
  alojamientosServicios,
  handleEdit,
  handleDelete,
}: AdministrationAccommodationServicesTablePropsType) {
  return (
    <div className="w-full border-4 border-[#e42153] bg-[#e4215380] rounded-2xl p-4 overflow-y-auto">
      <table className="w-full border-4 border-white">
        <thead>
          <tr>
            <th className="border-4 border-white p-2 text-white text-lg text-center">
              ID
            </th>
            <th className="border-4 border-white p-2 text-white text-lg text-left w-full">
              ID del alojamiento
            </th>
            <th className="border-4 border-white p-2 text-white text-lg text-left">
              ID del servicio
            </th>
            <th className="border-4 border-white p-2 text-white text-lg">
              Acciones
            </th>
          </tr>
        </thead>
        {alojamientosServicios.length > 0 && (
          <tbody>
            {alojamientosServicios.map((alojamientoServicio) => (
              <AdministrationRowInterface
                key={alojamientoServicio.idAlojamientoServicio}
                alojamientoServicio={alojamientoServicio}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        )}
      </table>
      {alojamientosServicios.length === 0 && (
        <h1 className="p-8 text-center text-white font-bold text-2xl w-full">
          No hay registros de "Alojamientos - Servicios"
        </h1>
      )}
    </div>
  );
}
