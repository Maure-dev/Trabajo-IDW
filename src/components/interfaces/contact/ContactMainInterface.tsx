import ContactFormInterface from "./ContactFormInterface";
import ContactInfoInterface from "./ContactInfoInterface";

export default function ContactMainInterface() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-between p-4 border-4 border-[#e42153] bg-[#e4215380] rounded-2xl">
      <ContactFormInterface />
      <ContactInfoInterface />
    </div>
  );
}
