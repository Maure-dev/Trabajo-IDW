import axios from "axios";
import { AdministrationAccommodationType, AdministrationAccommodation, AdministrationServicesType, AdministrationImagesType, AdministrationAccommodationServicesType } from "../../entities/entities";
import { API_URL } from '../settings'

const apiBaseUrl = `${API_URL}`;

// -------------------------------- TIPO ALOJAMIENTO --------------------------------------------------------------------------------

export const fetchTiposAlojamientos = async (): Promise<AdministrationAccommodationType[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/tiposAlojamiento/getTiposAlojamiento`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tiposAlojamiento:", error);
        throw error;
    }
};

const getTipoAlojamientoById = async (id: number): Promise<AdministrationAccommodationType> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/tiposAlojamiento/getTipoAlojamiento/${id}`);
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
        await axios.post(`${apiBaseUrl}/tiposAlojamiento/createTipoAlojamiento`, data);
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
        await axios.put(`${apiBaseUrl}/tiposAlojamiento/putTipoAlojamiento/${tipoAlojamiento.idTipoAlojamiento}`, data);
    } catch (error) {
        console.error("Error updating tipoAlojamiento:", error);
        throw error;
    }
};

export const deleteTipoAlojamiento = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${apiBaseUrl}/tiposAlojamiento/deleteTipoAlojamiento/${id}`);
    } catch (error) {
        console.error("Error deleting tipoAlojamiento:", error);
        throw error;
    }
};

// -------------------------------- FIN TIPO ALOJAMIENTO --------------------------------------------------------------------------------

// -------------------------------- ALOJAMIENTO -----------------------------------------------------------------------------------------

export const fetchAlojamientos = async (): Promise<AdministrationAccommodation[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/alojamiento/getAlojamientos`);
        let alojamientos: AdministrationAccommodation[] = response.data;

        const imagenes = await fetchImagenes();

        return await Promise.all(alojamientos.map(async item => {

            const imagen = imagenes.find(imagen => imagen.idAlojamiento === item.idAlojamiento);

            if (item.TipoAlojamiento !== undefined) {
                const { Descripcion } = await getTipoAlojamientoById(item.TipoAlojamiento);
                return { ...item, TipoAlojamientoDescription: Descripcion, imagenAlojamiento: imagen?.RutaArchivo };
            } else {
                return { ...item, TipoAlojamientoDescription: 'No definido', imagenAlojamiento: imagen?.RutaArchivo };
            }

        }));
    } catch (error) {
        console.error("Error fetching Alojamientos:", error);
        throw error;
    }
};

export const createAlojamiento = async (Alojamiento: AdministrationAccommodation): Promise<void> => {
    try {
        const data = {
            Titulo: Alojamiento.Titulo,
            Descripcion: Alojamiento.Descripcion,
            TipoAlojamiento: Alojamiento.TipoAlojamiento,
            Latitud: Alojamiento.Latitud,
            Longitud: Alojamiento.Longitud,
            PrecioPordia: Alojamiento.PrecioPorDia,
            CantidadDormitorios: Alojamiento.CantidadDormitorios,
            CantidadBanios: Alojamiento.CantidadBanios,
            Estado: Alojamiento.Estado,
        };
        await axios.post(`${apiBaseUrl}/alojamiento/createAlojamiento`, data);
    } catch (error) {
        console.error("Error creating Alojamiento:", error);
        throw error;
    }
};

export const updateAlojamiento = async (Alojamiento: AdministrationAccommodation): Promise<void> => {
    try {
        const data = {
            Titulo: Alojamiento.Titulo,
            Descripcion: Alojamiento.Descripcion,
            TipoAlojamiento: Alojamiento.TipoAlojamiento,
            Latitud: Alojamiento.Latitud,
            Longitud: Alojamiento.Longitud,
            PrecioPordia: Alojamiento.PrecioPorDia,
            CantidadDormitorios: Alojamiento.CantidadDormitorios,
            CantidadBanios: Alojamiento.CantidadBanios,
            Estado: Alojamiento.Estado,
        };
        await axios.put(`${apiBaseUrl}/alojamiento/putAlojamiento/${Alojamiento.idAlojamiento}`, data);
    } catch (error) {
        console.error("Error updating Alojamiento:", error);
        throw error;
    }
};

export const deleteAlojamiento = async (id: number): Promise<void> => {
    try {
        const alojamientoServicios: AdministrationAccommodationServicesType[]
            = await fetchAlojamientosServiciosByAlojamiento(id)
        for (const servicio of alojamientoServicios) {
            await deleteAlojamientoServicio(servicio.idAlojamientoServicio);
        }

        const allImagenes: AdministrationImagesType[] = await fetchImagenes();

        const imagenes = allImagenes.filter(imagen => imagen.idAlojamiento === id);

        for (const imagen of imagenes) {
            await deleteImagen(imagen.idImagen);
        }

        await axios.delete(`${apiBaseUrl}/alojamiento/deleteAlojamiento/${id}`);
    } catch (error) {
        console.error("Error deleting Alojamiento:", error);
        throw error;
    }
};

// -------------------------------- FIN ALOJAMIENTO -----------------------------------------------------------------------------------------

// -------------------------------- TIPO SERVICIOS ------------------------------------------------------------------------------------------

export const fetchTiposServicios = async (): Promise<AdministrationServicesType[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/servicio/getAllServicios`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tiposServicios:", error);
        throw error;
    }
};

export const createTipoServicio = async (tipoServicio: AdministrationServicesType): Promise<void> => {
    try {
        const data = {
            Nombre: tipoServicio.Nombre
        };
        await axios.post(`${apiBaseUrl}/servicio/createServicio`, data);
    } catch (error) {
        console.error("Error creating tipoServicio:", error);
        throw error;
    }
};

export const updateTipoServicio = async (tipoServicio: AdministrationServicesType): Promise<void> => {
    try {
        const data = {
            Nombre: tipoServicio.Nombre
        };
        await axios.put(`${apiBaseUrl}/servicio/updateServicio/${tipoServicio.idServicio}`, data);
    } catch (error) {
        console.error("Error updating tipoServicio:", error);
        throw error;
    }
};

export const deleteTipoServicio = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${apiBaseUrl}/servicio/deleteServicio/${id}`);
    } catch (error) {
        console.error("Error deleting tipoServicio:", error);
        throw error;
    }
};

// -------------------------------- FIN TIPO SERVICIOS ------------------------------------------------------------------------------------------

// -------------------------------- IMAGENES ----------------------------------------------------------------------------------------------------

export const fetchImagenes = async (): Promise<AdministrationImagesType[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/imagen/getAllImagenes`);
        return response.data;
    } catch (error) {
        console.error("Error fetching imagenes:", error);
        throw error;
    }
};

export const createImagen = async (imagen: AdministrationImagesType): Promise<void> => {
    try {
        const data = {
            idAlojamiento: imagen.idAlojamiento,
            RutaArchivo: imagen.RutaArchivo
        };
        await axios.post(`${apiBaseUrl}/imagen/createImagen`, data);
    } catch (error) {
        console.error("Error creating imagen:", error);
        throw error;
    }
};

export const updateImagen = async (imagen: AdministrationImagesType): Promise<void> => {
    try {
        const data = {
            idAlojamiento: imagen.idAlojamiento,
            RutaArchivo: imagen.RutaArchivo
        };
        await axios.put(`${apiBaseUrl}/imagen/updateImagen/${imagen.idImagen}`, data);
    } catch (error) {
        console.error("Error updating imagen:", error);
        throw error;
    }
};

export const deleteImagen = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${apiBaseUrl}/imagen/deleteImagen/${id}`);
    } catch (error) {
        console.error("Error deleting imagen:", error);
        throw error;
    }
};

// -------------------------------- FIN IMAGENES ----------------------------------------------------------------------------------------------------

// -------------------------------- ALOJAMIENTOS - SERVICIOS ----------------------------------------------------------------------------------------

export const fetchAlojamientosServicios = async (): Promise<AdministrationAccommodationServicesType[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/alojamientosServicios/getAllAlojamientoServicios`);
        return response.data;
    } catch (error) {
        console.error("Error fetching alojamientosServicios:", error);
        throw error;
    }
};

export const fetchAlojamientosServiciosByAlojamiento = async (idAlojamiento: number): Promise<AdministrationAccommodationServicesType[]> => {
    try {
        const response = await axios.get(`${apiBaseUrl}/alojamientosServicios/getAlojamientoServicios/${idAlojamiento}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching alojamientosServicios:", error);
        throw error;
    }
};

export const createAlojamientoServicio = async (alojamientoServicio: AdministrationAccommodationServicesType): Promise<void> => {
    try {
        const data = {
            idAlojamientoServicio: alojamientoServicio.idAlojamientoServicio,
            idAlojamiento: alojamientoServicio.idAlojamiento,
            idServicio: alojamientoServicio.idServicio
        };
        await axios.post(`${apiBaseUrl}/alojamientosServicios/createAlojamientoServicio`, data);
    } catch (error) {
        console.error("Error creating alojamientoServicio:", error);
        throw error;
    }
};

export const updateAlojamientoServicio = async (alojamientoServicio: AdministrationAccommodationServicesType): Promise<void> => {
    try {
        const data = {
            idAlojamientoServicio: alojamientoServicio.idAlojamientoServicio,
            idAlojamiento: alojamientoServicio.idAlojamiento,
            idServicio: alojamientoServicio.idServicio
        };
        await axios.put(`${apiBaseUrl}/alojamientosServicios/updateAlojamientoServicio/${alojamientoServicio.idAlojamientoServicio}`, data);
    } catch (error) {
        console.error("Error updating alojamientoServicio:", error);
        throw error;
    }
};

export const deleteAlojamientoServicio = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${apiBaseUrl}/alojamientosServicios/deleteAlojamientoServicio/${id}`);
    } catch (error) {
        console.error("Error deleting alojamientoServicio:", error);
        throw error;
    }
};

// -------------------------------- FIN ALOJAMIENTOS - SERVICIOS ------------------------------------------------------------------------------------