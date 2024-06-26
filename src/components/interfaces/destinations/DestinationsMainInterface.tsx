import DestinationsCardInterface from "./DestinationsCardInterface";
import { DestinationsMainPropsType } from "../../../entities/entities";

export default function DestinationsMainInterface({
  destinations,
  searchTerm,
  searchPriceMin,
  searchPriceMax,
  searchBathrooms,
  searchBedrooms,
  searchEstado,
  searchTipoAlojamiento,
}: DestinationsMainPropsType) {
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearchTerm = destination.Descripcion.toLowerCase().includes(
      searchTerm.toLowerCase()
    );

    const matchesPriceMin =
      !searchPriceMin ||
      (destination.PrecioPorDia !== undefined &&
        destination.PrecioPorDia >= searchPriceMin);
    const matchesPriceMax =
      !searchPriceMax ||
      (destination.PrecioPorDia !== undefined &&
        destination.PrecioPorDia <= searchPriceMax);

    const matchesBathrooms =
      !searchBathrooms || destination.CantidadBanios === searchBathrooms;
    const matchesBedrooms =
      !searchBedrooms || destination.CantidadDormitorios === searchBedrooms;
    const matchesEstado = !searchEstado || destination.Estado === searchEstado;
    const matchesTipoAlojamiento =
      !searchTipoAlojamiento ||
      destination.TipoAlojamientoDescription === searchTipoAlojamiento;

    return (
      matchesSearchTerm &&
      matchesPriceMin &&
      matchesPriceMax &&
      matchesBathrooms &&
      matchesBedrooms &&
      matchesEstado &&
      matchesTipoAlojamiento
    );
  });

  return (
    <div className="overflow-y-scroll grid grid-row-1 lg:grid-cols-5 gap-4 py-4 lg:px-4">
      {filteredDestinations.map((destination, index) => (
        <DestinationsCardInterface
          key={index}
          image={destination.imagenAlojamiento}
          description={destination.Descripcion}
          tipoAlojamiento={destination.TipoAlojamientoDescription}
          precioPorDia={destination.PrecioPorDia}
          cantidadDormitorios={destination.CantidadDormitorios}
          cantidadBanios={destination.CantidadBanios}
          estado={destination.Estado}
        />
      ))}
    </div>
  );
}
