export default function ContactInfoInterface() {
  return (
    <div className="flex flex-col w-full justify-between lg:pb-14 overflow-y-auto">
      <p className="text-white font-bold mb-4 lg:mb-0">
        Gracias por visitar nuestra página. Si tienes alguna pregunta,
        comentario o necesitas asistencia con tu reserva, estamos aquí para
        ayudarte. Puedes contactarnos a través de las siguientes opciones:
      </p>
      <ul className="text-white font-bold mb-4 lg:mb-0">
        <li className="mb-4 lg:mb-0">
          Teléfono: +1 800 123 4567 (disponible 24/7)
        </li>
        <li className="mb-4 lg:mb-0">
          Correo electrónico: &nbsp;
          <a href="mailto:contacto@soyuthuesped.com">
            contacto@soyuthuesped.com
          </a>
        </li>
        <li>
          Dirección postal: Calle Ficticia 123, Ciudad Imaginaria, CP 00000
        </li>
      </ul>
      <p className="text-white font-bold">
        Si prefieres el contacto por redes sociales, síguenos en nuestras
        cuentas de Facebook, Twitter e Instagram, donde respondemos a consultas
        y compartimos las últimas novedades. Agradecemos tus comentarios y nos
        comprometemos a responder a todas las consultas en un plazo de 24 horas.
        Tu satisfacción es nuestra prioridad y esperamos tener noticias tuyas
        pronto.
      </p>
    </div>
  );
}
