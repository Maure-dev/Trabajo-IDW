import DestinationsSearchBarInterface from "../../components/interfaces/destinations/DestinationsSearchBarInterface";
import DestinationsMainInterface from "../../components/interfaces/destinations/DestinationsMainInterface";
import { useState } from "react";

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col items-center bg-[#f5f5f5] px-4 lg:px-24 py-4">
      <DestinationsSearchBarInterface setSearchTerm={setSearchTerm} />
      <DestinationsMainInterface searchTerm={searchTerm} />
    </div>
  );
}
