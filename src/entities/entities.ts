import { ChangeEvent, FormEvent } from "react";

export type ContactInputFieldType = {
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

export type ContactTextAreaType = {
    name: string;
    id: string;
    placeholder: string;
}

export type ContactSubmitButtonType = {
    text: string;
}

export type HomeExperienceCardType = {
    profile: string;
    fullName: string;
    comment: string;
    isLast: boolean;
}

export type DestinationCardType = {
    image?: string;
    description: string;
    tipoAlojamiento?: string;
    precioPorDia?: number;
    cantidadDormitorios?: number;
    cantidadBanios?: number;
    estado: string;
}

export type DestinationsSearchBarPropsType = {
    setSearchTerm: (term: string) => void;
    setSearchPriceMin: (price?: number) => void;
    setSearchPriceMax: (price?: number) => void;
    setSearchBathrooms: (count?: number) => void;
    setSearchBedrooms: (count?: number) => void;
    estados: string[];
    tiposAlojamientos: string[];
    setSearchEstado: (estado: string) => void;
    setSearchTipoAlojamiento: (tipo: string) => void;
}

export type DestinationsMainPropsType = {
    destinations: AdministrationAccommodation[];
    searchTerm: string;
    searchPriceMin?: number;
    searchPriceMax?: number;
    searchBathrooms?: number;
    searchBedrooms?: number;
    searchEstado: string;
    searchTipoAlojamiento: string;
}

export type AdministrationTabPropsType = {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export type AdministrationAccommodation = {
    idAlojamiento: number;
    Titulo: string;
    Descripcion: string;
    imagenAlojamiento?: string;
    TipoAlojamiento?: number;
    TipoAlojamientoDescription: string;
    Latitud?: number;
    Longitud?: number;
    PrecioPorDia?: number;
    CantidadDormitorios?: number;
    CantidadBanios?: number;
    Estado: string;
}

export type AdministrationAccommodationFormPropsType = {
    formState: AdministrationAccommodation;
    isEditing: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export type AdministrationAccommodationTablePropsType = {
    Alojamientos: AdministrationAccommodation[];
    handleEdit: (Alojamiento: AdministrationAccommodation) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationAccommodationRowPropsType = {
    alojamiento: AdministrationAccommodation;
    handleEdit: (Alojamiento: AdministrationAccommodation) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationServicesType = {
    idServicio: number;
    Nombre: string;
}

export type AdministrationServicesTypeFormPropsType = {
    formState: AdministrationServicesType;
    isEditing: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export type AdministrationServicesTypeTablePropsType = {
    tiposServicios: AdministrationServicesType[];
    handleEdit: (tipoServicio: AdministrationServicesType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationServicesTypeRowPropsType = {
    tipo: AdministrationServicesType;
    handleEdit: (tipoServicio: AdministrationServicesType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationImagesType = {
    idImagen: number;
    idAlojamiento?: number;
    RutaArchivo: string;
}

export type AdministrationImagesFormPropsType = {
    formState: AdministrationImagesType;
    isEditing: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export type AdministrationImagesTablePropsType = {
    imagenes: AdministrationImagesType[];
    handleEdit: (imagen: AdministrationImagesType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationImagesRowPropsType = {
    imagen: AdministrationImagesType;
    handleEdit: (imagen: AdministrationImagesType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationAccommodationServicesType = {
    idAlojamientoServicio: number;
    idAlojamiento?: number;
    idServicio?: number;
}

export type AdministrationAccommodationServicesFormPropsType = {
    formState: AdministrationAccommodationServicesType;
    isEditing: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export type AdministrationAccommodationServicesTablePropsType = {
    alojamientosServicios: AdministrationAccommodationServicesType[];
    handleEdit: (alojamientoServicio: AdministrationAccommodationServicesType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationAccommodationServicesRowPropsType = {
    alojamientoServicio: AdministrationAccommodationServicesType;
    handleEdit: (alojamientoServicio: AdministrationAccommodationServicesType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationAccommodationType = {
    idTipoAlojamiento: number;
    Descripcion: string;
}

export type AdministrationAccommodationTypeFormPropsType = {
    formState: AdministrationAccommodationType;
    isEditing: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export type AdministrationAccommodationTypeTablePropsType = {
    tiposAlojamientos: AdministrationAccommodationType[];
    handleEdit: (tipoAlojamiento: AdministrationAccommodationType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationAccommodationTypeRowPropsType = {
    tipo: AdministrationAccommodationType;
    handleEdit: (tipoAlojamiento: AdministrationAccommodationType) => void;
    handleDelete: (id: number) => void;
}