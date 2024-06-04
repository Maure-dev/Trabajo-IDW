import { ContactTextAreaType } from "../../../entities/entities";

export default function ContactTextAreaInterface({
  name,
  id,
  placeholder,
}: ContactTextAreaType) {
  return (
    <textarea
      name={name}
      className="p-4 mb-2 rounded-lg resize-none"
      id={id}
      cols={20}
      rows={5}
      placeholder={placeholder}
    />
  );
}
