import { useState } from "react";
import AdministrationAccommodationTypeMainInterface from "../../components/interfaces/administration/accommodationType/AdministrationAccommodationTypeMainInterface";
import AdministrationTabInterface from "../../components/interfaces/administration/AdministrationTabInterface";
import AdministrationAccommodationMainInterface from "../../components/interfaces/administration/accommodation/AdministrationAccommodationMainInterface";
import AdministrationServicesTypeMainInterface from "../../components/interfaces/administration/servicesType/AdministrationServicesTypeMainInterface";
import AdministrationImagesMainInterface from "../../components/interfaces/administration/images/AdministrationImagesMainInterface";
import AdministrationAccommodationServicesMainInterface from "../../components/interfaces/administration/accommodationServices/AdministrationAccommodationServicesMainInterface";

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
      {activeTab === "Accommodation" && (
        <AdministrationAccommodationMainInterface />
      )}
      {activeTab === "ServicesType" && (
        <AdministrationServicesTypeMainInterface />
      )}
      {activeTab === "images" && <AdministrationImagesMainInterface />}
      {activeTab === "AccommodationServices" && (
        <AdministrationAccommodationServicesMainInterface />
      )}
    </div>
  );
}
