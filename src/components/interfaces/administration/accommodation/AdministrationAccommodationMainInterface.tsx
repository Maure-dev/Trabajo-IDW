import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  fetchAlojamientos,
  createAlojamiento,
  updateAlojamiento,
  deleteAlojamiento,
} from "../../../../services/administration/administrationService";
import { AdministrationAccommodation } from "../../../../entities/entities";
import AdministrationFormInterface from "./AdministrationFormInterface";
import AdministrationTableInterface from "./AdministrationTableInterface";

export default function AdministrationAccommodationMainInterface() {
  const [alojamientos, setAlojamientos] = useState<
    AdministrationAccommodation[]
  >([]);
  const [formState, setFormState] = useState<AdministrationAccommodation>({
    idAlojamiento: 0,
    Titulo: "",
    Descripcion: "",
    Estado: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    loadAlojamientos();
  }, []);

  const loadAlojamientos = async () => {
    try {
      const data = await fetchAlojamientos();
      setAlojamientos(data);
    } catch (error) {
      console.error("Error loading Alojamientos:", error);
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
        await updateAlojamiento(formState);
      } else {
        await createAlojamiento(formState);
      }
      setFormState({
        idAlojamiento: 0,
        Titulo: "",
        Descripcion: "",
        Estado: "",
      });
      setIsEditing(false);
      loadAlojamientos();
    } catch (error) {
      console.error("Error saving Alojamiento:", error);
    }
  };

  const handleEdit = (Alojamiento: AdministrationAccommodation) => {
    setFormState(Alojamiento);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAlojamiento(id);
      loadAlojamientos();
    } catch (error) {
      console.error("Error deleting Alojamiento:", error);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start w-full h-full text-center lg:text-start px-4 lg:px-24 py-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Alojamientos</h1>
      <AdministrationFormInterface
        formState={formState}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <AdministrationTableInterface
        Alojamientos={alojamientos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
