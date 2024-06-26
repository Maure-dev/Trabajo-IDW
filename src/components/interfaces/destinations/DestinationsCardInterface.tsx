import { DestinationCardType } from "../../../entities/entities";
import NotAvailable from "../../assets/destinations/not-available.jpg";

export default function DestinationsCardInterface({
  image,
  description,
  tipoAlojamiento,
  precioPorDia,
  cantidadDormitorios,
  cantidadBanios,
  estado,
}: DestinationCardType) {
  return (
    <div className="flex flex-col text-center items-center justify-between p-4 border-4 border-[#e42153] bg-[#e4215380] rounded-2xl">
      {image ? (
        <img
          src={image}
          alt={`${tipoAlojamiento} - ${description}`}
          className="rounded-lg w-full h-32 object-cover mb-4"
        />
      ) : (
        <img
          src={NotAvailable}
          alt={`${tipoAlojamiento} - ${description}`}
          className="rounded-lg w-full h-32 object-cover mb-4"
        />
      )}
      <p className="mb-4 text-white font-bold">
        {tipoAlojamiento} - {description}
      </p>
      <p className="mb-4 text-white font-bold">${precioPorDia}</p>
      <p className="mb-4 text-white font-bold">
        Dormitorios: {cantidadDormitorios}
      </p>
      <p className="mb-4 text-white font-bold">Baños: {cantidadBanios}</p>
      <p className="mb-4 text-white font-bold">Estado: {estado}</p>
      <a
        href=""
        className="w-fit flex items-center font-semibold text-white border-2 border-[#03cf74] hover:border-white rounded-full text-2xl bg-[#03cf74] p-2 uppercase"
      >
        Contactar
      </a>
    </div>
  );
}
