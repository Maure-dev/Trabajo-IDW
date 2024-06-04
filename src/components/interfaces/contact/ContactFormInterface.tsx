import ContactInputFieldInterface from "./ContactInputFieldInterface";
import ContactSubmitButtonInterface from "./ContactSubmitButtonInterface";
import ContactTextAreaInterface from "./ContactTextAreaInterface";

export default function ContactFormInterface() {
  return (
    <div className="flex flex-col justify-between mr-8 w-full">
      <ContactInputFieldInterface
        type="text"
        name="firstLastName"
        id="firstLastName"
        placeholder="Nombre y Apellido"
      />
      <ContactInputFieldInterface
        type="text"
        name="phone"
        id="phone"
        placeholder="Número de Teléfono"
      />
      <ContactInputFieldInterface
        type="email"
        name="email"
        id="email"
        placeholder="Correo electrónico"
      />
      <ContactTextAreaInterface
        name="message"
        id="message"
        placeholder="¿En qué podemos ayudarte?"
      />
      <ContactSubmitButtonInterface text="Enviar" />
    </div>
  );
}
