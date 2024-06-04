import DestinationsCardInterface from "./DestinationsCardInterface";
import Destination1 from "../../assets/destinations/destination-1.webp";
import Destination2 from "../../assets/destinations/destination-2.webp";
import Destination3 from "../../assets/destinations/destination-3.webp";
import Destination4 from "../../assets/destinations/destination-4.webp";
import Destination5 from "../../assets/destinations/destination-5.webp";
import Destination6 from "../../assets/destinations/destination-6.webp";
import Destination7 from "../../assets/destinations/destination-7.webp";
import Destination8 from "../../assets/destinations/destination-8.webp";
import Destination9 from "../../assets/destinations/destination-9.webp";
import Destination10 from "../../assets/destinations/destination-10.webp";
import Destination11 from "../../assets/destinations/destination-11.webp";
import Destination12 from "../../assets/destinations/destination-12.webp";
import Destination13 from "../../assets/destinations/destination-13.webp";
import Destination14 from "../../assets/destinations/destination-14.webp";
import Destination15 from "../../assets/destinations/destination-15.webp";
import { DestinationsMainPropsType } from "../../../entities/entities";

export default function DestinationsMainInterface({
  searchTerm,
}: DestinationsMainPropsType) {
  const destinations = [
    { image: Destination1, description: "Casa en playa de 4 ambientes" },
    {
      image: Destination2,
      description: "Apartamento en el centro de la ciudad",
    },
    { image: Destination3, description: "Loft industrial en zona artística" },
    { image: Destination4, description: "Cabaña rústica en las montañas" },
    { image: Destination5, description: "Casa de campo con jardín amplio" },
    { image: Destination6, description: "Chalet en zona de esquí y bosques" },
    {
      image: Destination7,
      description: "Departamento familiar cerca de parques",
    },
    {
      image: Destination8,
      description: "Departamento all inclusive con piscina y gimnasio",
    },
    {
      image: Destination9,
      description: "Departamento en playa de 5 ambientes",
    },
    {
      image: Destination10,
      description: "Departamento en playa de 2 ambientes",
    },
    {
      image: Destination11,
      description: "Apartamento en el centro de la ciudad",
    },
    {
      image: Destination12,
      description: "Habitación privada en casa compartida",
    },
    { image: Destination13, description: "Casa en playa de 6 ambientes" },
    {
      image: Destination14,
      description: "Habitación privada en casa compartida",
    },
    { image: Destination15, description: "Casa en playa de 3 ambientes" },
  ];

  const filteredDestinations = destinations.filter((destination) =>
    destination.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-y-scroll grid grid-row-1 lg:grid-cols-5 gap-4 py-4 lg:px-4">
      {filteredDestinations.map((destination, index) => (
        <DestinationsCardInterface
          key={index}
          image={destination.image}
          description={destination.description}
        />
      ))}
    </div>
  );
}
