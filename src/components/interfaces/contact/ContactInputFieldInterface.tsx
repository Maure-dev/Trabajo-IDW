import { ContactInputFieldType } from "../../../entities/entities";

export default function ContactInputFieldInterface({
  type,
  name,
  id,
  placeholder,
}: ContactInputFieldType) {
  return (
    <input
      type={type}
      className="p-4 rounded-lg mb-2"
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
