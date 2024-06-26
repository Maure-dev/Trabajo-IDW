import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  fetchImagenes,
  createImagen,
  updateImagen,
  deleteImagen,
} from "../../../../services/administration/administrationService";
import { AdministrationImagesType } from "../../../../entities/entities";
import AdministrationFormInterface from "./AdministrationFormInterface";
import AdministrationTableInterface from "./AdministrationTableInterface";

export default function AdministrationImagesMainInterface() {
  const [imagenes, setimagenes] = useState<AdministrationImagesType[]>([]);
  const [formState, setFormState] = useState<AdministrationImagesType>({
    idImagen: 0,
    RutaArchivo: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    loadImagenes();
  }, []);

  const loadImagenes = async () => {
    try {
      const data = await fetchImagenes();
      setimagenes(data);
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
        await updateImagen(formState);
      } else {
        await createImagen(formState);
      }
      setFormState({
        idImagen: 0,
        RutaArchivo: "",
      });
      setIsEditing(false);
      loadImagenes();
    } catch (error) {
      console.error("Error saving tipoAlojamiento:", error);
    }
  };

  const handleEdit = (imagen: AdministrationImagesType) => {
    setFormState(imagen);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteImagen(id);
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
        imagenes={imagenes}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
