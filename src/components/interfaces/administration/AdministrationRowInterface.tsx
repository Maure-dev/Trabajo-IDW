import { AdministrationRowPropsType } from "../../../entities/entities";

export default function AdministrationRowInterface({
  tipo,
  handleEdit,
  handleDelete,
}: AdministrationRowPropsType) {
  return (
    <tr>
      <td className="border-4 border-white p-2 text-white text-lg text-center">
        {tipo.idTipoAlojamiento}
      </td>
      <td className="border-4 border-white p-2 w-full text-white text-lg text-left">
        {tipo.Descripcion}
      </td>
      <td className="flex border-2 border-white p-2 text-end">
        <button
          onClick={() => handleEdit(tipo)}
          className="flex h-fit p-2 rounded mr-4 hover:outline hover:outline-[#0094ff]"
        >
          <span className="material-icons text-[#0094ff]">edit</span>
        </button>
        <button
          onClick={() => handleDelete(tipo.idTipoAlojamiento)}
          className="flex h-fit p-2 rounded hover:outline hover:outline-red-500"
        >
          <span className="material-icons text-red-500">delete</span>
        </button>
      </td>
    </tr>
  );
}
