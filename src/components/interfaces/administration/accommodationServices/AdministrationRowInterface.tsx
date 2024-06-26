import { AdministrationAccommodationServicesRowPropsType } from "../../../../entities/entities";

export default function AdministrationRowInterface({
  alojamientoServicio,
  handleEdit,
  handleDelete,
}: AdministrationAccommodationServicesRowPropsType) {
  return (
    <tr>
      <td className="border-4 border-white p-2 text-white text-lg text-center">
        {alojamientoServicio.idAlojamientoServicio}
      </td>
      <td className="border-4 border-white p-2 text-white text-lg text-left">
        {alojamientoServicio.idAlojamiento}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {alojamientoServicio.idServicio}
      </td>
      <td className="border-b-4 border-white p-2 text-end">
        <div className="flex items-center">
          <button
            onClick={() => handleEdit(alojamientoServicio)}
            className="flex h-fit p-2 rounded mr-4 hover:outline hover:outline-[#0094ff]"
          >
            <span className="material-icons text-[#0094ff]">edit</span>
          </button>
          <button
            onClick={() =>
              handleDelete(alojamientoServicio.idAlojamientoServicio)
            }
            className="flex h-fit p-2 rounded hover:outline hover:outline-red-500"
          >
            <span className="material-icons text-red-500">delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}
