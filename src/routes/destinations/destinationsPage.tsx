import DestinationsSearchBarInterface from "../../components/interfaces/destinations/DestinationsSearchBarInterface";
import DestinationsMainInterface from "../../components/interfaces/destinations/DestinationsMainInterface";
import { useEffect, useState } from "react";
import { AdministrationAccommodation } from "../../entities/entities";
import { fetchAlojamientos } from "../../services/administration/administrationService";

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<
    AdministrationAccommodation[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchPriceMin, setSearchPriceMin] = useState<number | undefined>(
    undefined
  );
  const [searchPriceMax, setSearchPriceMax] = useState<number | undefined>(
    undefined
  );
  const [searchBathrooms, setSearchBathrooms] = useState<number | undefined>(
    undefined
  );
  const [searchBedrooms, setSearchBedrooms] = useState<number | undefined>(
    undefined
  );
  const [searchEstado, setSearchEstado] = useState<string>("");

  const [searchTipoAlojamiento, setSearchTipoAlojamiento] =
    useState<string>("");

  const [filteredEstados, setFilteredEstados] = useState<string[]>([]);

  const [filteredTiposAlojamientos, setFilteredTiposAlojamientos] = useState<
    string[]
  >([]);

  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    try {
      const data = await fetchAlojamientos();
      setDestinations(data);
    } catch (error) {
      console.error("Error loading Alojamientos:", error);
    }
  };

  useEffect(() => {
    const uniqueTiposAlojamientos = Array.from(
      new Set(
        destinations.map(
          (destination) => destination.TipoAlojamientoDescription
        )
      )
    );
    const uniqueEstados = Array.from(
      new Set(destinations.map((destination) => destination.Estado))
    );
    setFilteredEstados(uniqueEstados);
    setFilteredTiposAlojamientos(uniqueTiposAlojamientos);
  }, [destinations]);

  return (
    <div className="w-full h-full flex flex-col items-center bg-[#f5f5f5] px-4 lg:px-24 py-4">
      <DestinationsSearchBarInterface
        setSearchTerm={setSearchTerm}
        setSearchPriceMin={setSearchPriceMin}
        setSearchPriceMax={setSearchPriceMax}
        setSearchBathrooms={setSearchBathrooms}
        setSearchBedrooms={setSearchBedrooms}
        estados={filteredEstados}
        tiposAlojamientos={filteredTiposAlojamientos}
        setSearchEstado={setSearchEstado}
        setSearchTipoAlojamiento={setSearchTipoAlojamiento}
      />
      <DestinationsMainInterface
        destinations={destinations}
        searchTerm={searchTerm}
        searchPriceMin={searchPriceMin}
        searchPriceMax={searchPriceMax}
        searchBathrooms={searchBathrooms}
        searchBedrooms={searchBedrooms}
        searchEstado={searchEstado}
        searchTipoAlojamiento={searchTipoAlojamiento}
      />
    </div>
  );
}
