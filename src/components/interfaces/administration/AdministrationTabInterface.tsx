import { AdministrationTabPropsType } from "../../../entities/entities";

export default function AdministrationTabInterface({
  activeTab,
  setActiveTab,
}: AdministrationTabPropsType) {
  const tabs = [
    { id: "AccommodationType", text: "Tipos de Alojamientos" },
    { id: "ServicesType", text: "Tipos de Servicios" },
    { id: "Accommodation", text: "Alojamientos" },
    { id: "images", text: "Imágenes del Alojamiento" },
    { id: "AccommodationServices", text: "Servicios del Alojamiento" },
  ];

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#ff7d34] w-full flex items-center justify-center p-4">
      {tabs.map((tab, index) => {
        const isLastTab = tabs.length - 1;
        return (
          <span
            key={index}
            onClick={() => handleSetActiveTab(tab.id)}
            className={`uppercase cursor-pointer ${
              !(isLastTab === index) && "mr-8"
            } ${
              tab.id === activeTab
                ? "font-bold text-[#555555] after:content-[''] after:float-left after:bg-[#555555] after:w-full after:h-1.5 after:rounded-full after:mt-1"
                : "text-white hover:font-bold hover:text-[#555555]"
            }`}
          >
            {tab.text}
          </span>
        );
      })}
    </div>
  );
}
