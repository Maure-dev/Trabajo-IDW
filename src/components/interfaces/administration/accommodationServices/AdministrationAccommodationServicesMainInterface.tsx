import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  fetchAlojamientosServicios,
  createAlojamientoServicio,
  updateAlojamientoServicio,
  deleteAlojamientoServicio,
} from "../../../../services/administration/administrationService";
import { AdministrationAccommodationServicesType } from "../../../../entities/entities";
import AdministrationFormInterface from "./AdministrationFormInterface";
import AdministrationTableInterface from "./AdministrationTableInterface";

export default function AdministrationAccommodationServicesMainInterface() {
  const [alojamientosServicios, setAlojamientosServicios] = useState<
    AdministrationAccommodationServicesType[]
  >([]);
  const [formState, setFormState] =
    useState<AdministrationAccommodationServicesType>({
      idAlojamientoServicio: 0,
    });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    loadImagenes();
  }, []);

  const loadImagenes = async () => {
    try {
      const data = await fetchAlojamientosServicios();
      setAlojamientosServicios(data);
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
        await updateAlojamientoServicio(formState);
      } else {
        await createAlojamientoServicio(formState);
      }
      setFormState({
        idAlojamientoServicio: 0,
      });
      setIsEditing(false);
      loadImagenes();
    } catch (error) {
      console.error("Error saving tipoAlojamiento:", error);
    }
  };

  const handleEdit = (
    alojamientoServicios: AdministrationAccommodationServicesType
  ) => {
    setFormState(alojamientoServicios);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAlojamientoServicio(id);
      loadImagenes();
    } catch (error) {
      console.error("Error deleting tipoAlojamiento:", error);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start w-full h-full text-center lg:text-start px-4 lg:px-24 py-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Imágenes</h1>
      <AdministrationFormInterface
        formState={formState}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <AdministrationTableInterface
        alojamientosServicios={alojamientosServicios}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
