import Background from "../../components/assets/home/background.jpg";
import HomeExperiencesSectionInterface from "../../components/interfaces/home/HomeExperiencesSectionInterface";
import HomeSearchBarInterface from "../../components/interfaces/home/HomeSearchBarInterface";

export default function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat h-full w-full px-4 lg:px-24 py-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <span></span>
      <HomeSearchBarInterface />
      <HomeExperiencesSectionInterface />
    </div>
  );
}
