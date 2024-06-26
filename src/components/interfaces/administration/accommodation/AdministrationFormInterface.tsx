import { AdministrationAccommodationFormPropsType } from "../../../../entities/entities";

export default function AdministrationFormInterface({
  formState,
  isEditing,
  handleInputChange,
  handleSubmit,
}: AdministrationAccommodationFormPropsType) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full mb-8 grid grid-cols-5 gap-4 border-4 ${
        isEditing
          ? "border-[#0094ff] bg-[#0094ff80]"
          : "border-[#e42153] bg-[#e4215380]"
      } rounded-2xl p-4`}
    >
      <input
        type="text"
        name="Titulo"
        value={formState.Titulo}
        onChange={handleInputChange}
        placeholder="Título"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="text"
        name="Descripcion"
        value={formState.Descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="TipoAlojamiento"
        value={formState.TipoAlojamiento}
        onChange={handleInputChange}
        placeholder="Tipo de alojamiento"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="Latitud"
        value={formState.Latitud}
        onChange={handleInputChange}
        placeholder="Latitud"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="Longitud"
        value={formState.Longitud}
        onChange={handleInputChange}
        placeholder="Longitud"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="PrecioPorDia"
        value={formState.PrecioPorDia}
        onChange={handleInputChange}
        placeholder="Precio por día"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="CantidadDormitorios"
        value={formState.CantidadDormitorios}
        onChange={handleInputChange}
        placeholder="Cantidad de dormitorios"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="CantidadBanios"
        value={formState.CantidadBanios}
        onChange={handleInputChange}
        placeholder="Cantidad de baños"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="text"
        name="Estado"
        value={formState.Estado}
        onChange={handleInputChange}
        placeholder="Estado"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <button
        type="submit"
        className="w-fit flex justify-self-center items-center font-semibold text-white border-2 border-[#03cf74] hover:border-white rounded-full text-2xl bg-[#03cf74] p-2 uppercase"
      >
        {isEditing ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
