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
    image: string;
    description: string;
}

export type DestinationsSearchBarPropsType = {
    setSearchTerm: (term: string) => void;
}

export type DestinationsMainPropsType = {
    searchTerm: string;
}

export type AdministrationTabPropsType = {
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}

export type AdministrationAccommodationType = {
    idTipoAlojamiento: number;
    Descripcion: string;
}

export type AdministrationFormPropsType = {
    formState: AdministrationAccommodationType;
    isEditing: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export type AdministrationTablePropsType = {
    tiposAlojamientos: AdministrationAccommodationType[];
    handleEdit: (tipoAlojamiento: AdministrationAccommodationType) => void;
    handleDelete: (id: number) => void;
}

export type AdministrationRowPropsType = {
    tipo: AdministrationAccommodationType;
    handleEdit: (tipoAlojamiento: AdministrationAccommodationType) => void;
    handleDelete: (id: number) => void;
}