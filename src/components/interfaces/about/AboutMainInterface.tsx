import AboutContactInterface from "./AboutContactInterface";
import AboutInfoInterface from "./AboutInfoInterface";

export default function AboutMainInterface() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 border-4 border-[#0094ff] bg-[#0094ff80] rounded-2xl overflow-y-auto">
      <AboutInfoInterface />
      <AboutContactInterface />
    </div>
  );
}
