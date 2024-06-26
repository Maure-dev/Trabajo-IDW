import { AdministrationImagesTablePropsType } from "../../../../entities/entities";
import AdministrationRowInterface from "./AdministrationRowInterface";

export default function AdministrationTableInterface({
  imagenes,
  handleEdit,
  handleDelete,
}: AdministrationImagesTablePropsType) {
  return (
    <div className="w-full border-4 border-[#e42153] bg-[#e4215380] rounded-2xl p-4 overflow-y-auto">
      <table className="w-full border-4 border-white">
        <thead>
          <tr>
            <th className="border-4 border-white p-2 text-white text-lg text-center">
              ID
            </th>
            <th className="border-4 border-white p-2 text-white text-lg text-left">
              ID del alojamiento
            </th>
            <th className="border-4 border-white p-2 text-white text-lg text-left w-full">
              Ruta de la imagen
            </th>
            <th className="border-4 border-white p-2 text-white text-lg">
              Acciones
            </th>
          </tr>
        </thead>
        {imagenes.length > 0 && (
          <tbody>
            {imagenes.map((imagen) => (
              <AdministrationRowInterface
                key={imagen.idImagen}
                imagen={imagen}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        )}
      </table>
      {imagenes.length === 0 && (
        <h1 className="p-8 text-center text-white font-bold text-2xl w-full">
          No hay registros de "Imágenes"
        </h1>
      )}
    </div>
  );
}
