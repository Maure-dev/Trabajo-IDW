import axios from "axios";
import { AdministrationAccommodationType } from "../../entities/entities";
import { API_URL } from '../settings'

const apiBaseUrl = `${API_URL}/tiposAlojamiento`;

export const fetchTiposAlojamientos = async (): Promise<AdministrationAccommodationType[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/getTiposAlojamiento`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tiposAlojamiento:", error);
        throw error;
    }
};

export const createTipoAlojamiento = async (tipoAlojamiento: AdministrationAccommodationType): Promise<void> => {
    try {
        const data = {
            Descripcion: tipoAlojamiento.Descripcion
        };
        await axios.post(`${apiBaseUrl}/createTipoAlojamiento`, data);
    } catch (error) {
        console.error("Error creating tipoAlojamiento:", error);
        throw error;
    }
};

export const updateTipoAlojamiento = async (tipoAlojamiento: AdministrationAccommodationType): Promise<void> => {
    try {
        const data = {
            Descripcion: tipoAlojamiento.Descripcion
        };
        await axios.put(`${apiBaseUrl}/putTipoAlojamiento/${tipoAlojamiento.idTipoAlojamiento}`, data);
    } catch (error) {
        console.error("Error updating tipoAlojamiento:", error);
        throw error;
    }
};

export const deleteTipoAlojamiento = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${apiBaseUrl}/deleteTipoAlojamiento/${id}`);
    } catch (error) {
        console.error("Error deleting tipoAlojamiento:", error);
        throw error;
    }
};