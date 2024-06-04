import { ContactSubmitButtonType } from "../../../entities/entities";

export default function ContactSubmitButtonInterface({
  text,
}: ContactSubmitButtonType) {
  return (
    <button className="w-fit font-semibold text-white border-2 border-[#03cf74] hover:border-white rounded-full text-2xl bg-[#03cf74] p-2 uppercase self-end mb-4 lg:mb-0">
      {text}
    </button>
  );
}
