import { AdministrationAccommodationServicesFormPropsType } from "../../../../entities/entities";

export default function AdministrationFormInterface({
  formState,
  isEditing,
  handleInputChange,
  handleSubmit,
}: AdministrationAccommodationServicesFormPropsType) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`w-fit mb-8 flex flex-col lg:flex-row items-center border-4 ${
        isEditing
          ? "border-[#0094ff] bg-[#0094ff80]"
          : "border-[#e42153] bg-[#e4215380]"
      } rounded-2xl p-4`}
    >
      <input
        type="number"
        name="idAlojamiento"
        value={formState.idAlojamiento}
        onChange={handleInputChange}
        placeholder="ID del alojamiento"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <input
        type="number"
        name="idServicio"
        value={formState.idServicio}
        onChange={handleInputChange}
        placeholder="ID del servicio"
        className="p-4 border-2 rounded-lg mb-4 lg:mb-0 lg:mr-4"
        required
      />
      <button
        type="submit"
        className="w-fit flex items-center font-semibold text-white border-2 border-[#03cf74] hover:border-white rounded-full text-2xl bg-[#03cf74] p-2 uppercase"
      >
        {isEditing ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
