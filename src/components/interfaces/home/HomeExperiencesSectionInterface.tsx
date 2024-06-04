import Brian from "../../assets/home/brian.jpeg";
import Javier from "../../assets/home/javier.jpeg";
import Mauro from "../../assets/home/mauro.jpg";
import HomeAboutUsInterface from "./HomeAboutUsInterface";
import HomeExperienceCardInterface from "./HomeExperienceCardInterface";

export default function HomeExperiencesSectionInterface() {
  const experiences = [
    {
      profile: Brian,
      fullName: "Brian Leonel Retamar",
      comment:
        "'Mi estancia fue simplemente maravillosa.' El anfitrión fue muy atento y el apartamento estaba impecable. La ubicación era perfecta, cerca de todo lo que quería visitar.",
    },
    {
      profile: Javier,
      fullName: "Javier Ignacio Gerol",
      comment:
        "'El alojamiento superó mis expectativas por el precio.' Todo estaba limpio y bien equipado. El anfitrión fue muy amable y nos dio excelentes recomendaciones para explorar la zona.",
    },
    {
      profile: Mauro,
      fullName: "Mauro Alejandro Gerardi",
      comment:
        "'El apartamento estaba en una ubicación increíble, a solo unos pasos de los principales puntos de interés.' Me encantó lo cómodo y acogedor que era. Fue una experiencia inolvidable.",
    },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row bg-[#ff7d34b3] rounded-2xl p-4 overflow-y-auto h-72">
      <HomeAboutUsInterface />
      {experiences.map((experience, index) => (
        <HomeExperienceCardInterface
          key={index}
          profile={experience.profile}
          fullName={experience.fullName}
          comment={experience.comment}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
