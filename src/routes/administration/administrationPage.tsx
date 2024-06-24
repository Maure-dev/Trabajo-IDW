import { useState } from "react";
import AdministrationAccommodationTypeMainInterface from "../../components/interfaces/administration/accommodationType/AdministrationAccommodationTypeMainInterface";
import AdministrationTabInterface from "../../components/interfaces/administration/AdministrationTabInterface";

export default function AdministrationPage() {
  const [activeTab, setActiveTab] = useState("AccommodationType");
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-[#f5f5f5]">
      <AdministrationTabInterface
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "AccommodationType" && (
        <AdministrationAccommodationTypeMainInterface />
      )}
    </div>
  );
}
