import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  fetchTiposServicios,
  createTipoServicio,
  updateTipoServicio,
  deleteTipoServicio,
} from "../../../../services/administration/administrationService";
import { AdministrationServicesType } from "../../../../entities/entities";
import AdministrationFormInterface from "./AdministrationFormInterface";
import AdministrationTableInterface from "./AdministrationTableInterface";

export default function AdministrationServicesTypeMainInterface() {
  const [tiposServicios, setTiposServicios] = useState<
    AdministrationServicesType[]
  >([]);
  const [formState, setFormState] = useState<AdministrationServicesType>({
    idServicio: 0,
    Nombre: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    loadTiposServicios();
  }, []);

  const loadTiposServicios = async () => {
    try {
      const data = await fetchTiposServicios();
      setTiposServicios(data);
    } catch (error) {
      console.error("Error loading tiposServicios:", error);
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
        await updateTipoServicio(formState);
      } else {
        await createTipoServicio(formState);
      }
      setFormState({
        idServicio: 0,
        Nombre: "",
      });
      setIsEditing(false);
      loadTiposServicios();
    } catch (error) {
      console.error("Error saving tipoServicio:", error);
    }
  };

  const handleEdit = (tipoAlojamiento: AdministrationServicesType) => {
    setFormState(tipoAlojamiento);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTipoServicio(id);
      loadTiposServicios();
    } catch (error) {
      console.error("Error deleting tipoServicio:", error);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start w-full h-full text-center lg:text-start px-4 lg:px-24 py-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Tipos de Servicios</h1>
      <AdministrationFormInterface
        formState={formState}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <AdministrationTableInterface
        tiposServicios={tiposServicios}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
