import { AdministrationTablePropsType } from "../../../../entities/entities";
import AdministrationRowInterface from "./AdministrationRowInterface";

export default function AdministrationTableInterface({
  tiposAlojamientos,
  handleEdit,
  handleDelete,
}: AdministrationTablePropsType) {
  return (
    <div className="w-full border-4 border-[#e42153] bg-[#e4215380] rounded-2xl p-4 overflow-y-auto">
      <table className="w-full border-4 border-white">
        <thead>
          <tr>
            <th className="border-4 border-white p-2 text-white text-lg text-center">
              ID
            </th>
            <th className="border-4 border-white p-2 text-white text-lg text-left w-full">
              Descripción
            </th>
            <th className="border-4 border-white p-2 text-white text-lg">
              Acciones
            </th>
          </tr>
        </thead>
        {tiposAlojamientos.length > 0 && (
          <tbody>
            {tiposAlojamientos.map((tipo) => (
              <AdministrationRowInterface
                key={tipo.idTipoAlojamiento}
                tipo={tipo}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        )}
      </table>
      {tiposAlojamientos.length === 0 && (
        <h1 className="p-8 text-center text-white font-bold text-2xl w-full">
          No hay registros de "Tipos Alojamiento"
        </h1>
      )}
    </div>
  );
}
