import { AdministrationAccommodationRowPropsType } from "../../../../entities/entities";

export default function AdministrationRowInterface({
  alojamiento,
  handleEdit,
  handleDelete,
}: AdministrationAccommodationRowPropsType) {
  return (
    <tr>
      <td className="border-4 border-white p-2 text-white text-lg text-center">
        {alojamiento.idAlojamiento}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.Titulo}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.Descripcion}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.TipoAlojamientoDescription}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.Latitud}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.Longitud}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.PrecioPorDia}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.CantidadDormitorios}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.CantidadBanios}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamiento.Estado}
      </td>
      <td className="border-b-4 border-white p-2 text-end">
        <div className="flex items-center">
          <button
            onClick={() => handleEdit(alojamiento)}
            className="flex h-fit p-2 rounded mr-4 hover:outline hover:outline-[#0094ff]"
          >
            <span className="material-icons text-[#0094ff]">edit</span>
          </button>
          <button
            onClick={() => handleDelete(alojamiento.idAlojamiento)}
            className="flex h-fit p-2 rounded hover:outline hover:outline-red-500"
          >
            <span className="material-icons text-red-500">delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}
