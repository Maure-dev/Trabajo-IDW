import { Link } from "react-router-dom";

export default function HomeAboutUsInterface() {
  return (
    <div className="flex flex-col justify-between p-4 bg-[#ffffff80] rounded-2xl mt-4 lg:mt-0 lg:mr-4">
      <h1 className="font-bold text-2xl mb-2 lg:mb-0">Sobre nosotros:</h1>
      <p className="text-sm mb-2 lg:mb-0 font-medium">
        Somos una plataforma de alojamientos que conecta a viajeros con
        anfitriones de todo el mundo. Ofrecemos una amplia variedad de opciones
        de hospedaje, desde casas y apartamentos hasta habitaciones privadas,
        permitiendo a nuestros usuarios encontrar el lugar perfecto para su
        próxima aventura o viaje de negocios.
      </p>
      <Link
        to="/about"
        className="flex w-fit bg-[#0094ff] self-end rounded-full"
      >
        <span className="material-icons text-white">add</span>
      </Link>
    </div>
  );
}
