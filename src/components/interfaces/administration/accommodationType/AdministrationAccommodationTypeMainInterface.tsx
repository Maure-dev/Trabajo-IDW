import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  fetchTiposAlojamientos,
  createTipoAlojamiento,
  updateTipoAlojamiento,
  deleteTipoAlojamiento,
} from "../../../../services/administration/administrationService";
import { AdministrationAccommodationType } from "../../../../entities/entities";
import AdministrationFormInterface from "./AdministrationFormInterface";
import AdministrationTableInterface from "./AdministrationTableInterface";

export default function AdministrationAccommodationTypeMainInterface() {
  const [tiposAlojamientos, setTiposAlojamientos] = useState<
    AdministrationAccommodationType[]
  >([]);
  const [formState, setFormState] = useState<AdministrationAccommodationType>({
    idTipoAlojamiento: 0,
    Descripcion: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    loadTiposAlojamientos();
  }, []);

  const loadTiposAlojamientos = async () => {
    try {
      const data = await fetchTiposAlojamientos();
      setTiposAlojamientos(data);
    } catch (error) {
      console.error("Error loading tiposAlojamientos:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateTipoAlojamiento(formState);
      } else {
        await createTipoAlojamiento(formState);
      }
      setFormState({ idTipoAlojamiento: 0, Descripcion: "" });
      setIsEditing(false);
      loadTiposAlojamientos();
    } catch (error) {
      console.error("Error saving tipoAlojamiento:", error);
    }
  };

  const handleEdit = (tipoAlojamiento: AdministrationAccommodationType) => {
    setFormState(tipoAlojamiento);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTipoAlojamiento(id);
      loadTiposAlojamientos();
    } catch (error) {
      console.error("Error deleting tipoAlojamiento:", error);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start w-full h-full text-center lg:text-start px-4 lg:px-24 py-4">
      <h1 className="text-2xl font-bold mb-4">
        Gestión de Tipos de Alojamientos
      </h1>
      <AdministrationFormInterface
        formState={formState}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <AdministrationTableInterface
        tiposAlojamientos={tiposAlojamientos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
