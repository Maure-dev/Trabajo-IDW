# Trabajo-IDW

### Trabajo Integrador - Introducción al Desarrollo Web

# Índice

1. [Integrantes del Proyecto](#integrantes-del-proyecto)
2. [Descripción del Proyecto](#descripción-del-proyecto)
3. [Objetivo](#objetivo)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Dependencias](#dependencias)
6. [Instalación y Configuración](#instalación-y-configuración)
7. [Uso del Proyecto](#uso-del-proyecto)
8. [Licencia](#licencia)

## Integrantes del Proyecto

- **Mauro Alejandro Gerardi**

- **Javier Ignacio Gerol**

- **Brian Leonel Retamar**

## Descripción del Proyecto

Este proyecto es una aplicación Express.js que sirve archivos HTML y CSS estáticos y tiene funcionalidades de API.

Se requiere la creación de un sitio web que sirva como catálogo de alojamientos, que abarque una amplia variedad de opciones como casas, departamentos, hostels, entre otros.

Este sitio proporciona una experiencia visual atractiva y de fácil uso, permitiendo a los visitantes realizar filtros para encontrar el alojamiento más adecuado a sus necesidades.

## Objetivo

El objetivo es crear interfaces de usuario interactivas, con diseño responsivo o adaptativo que se comuniquen con la citada API, permitiendo a los usuarios explorar el catálogo de alojamientos de manera sencilla.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- `app/src/api/`: Contiene el archivo `server.js`, el cual inicia el servidor Express.js.

- `app/src/html/`: Contiene las páginas HTML para el proyecto.

- `app/src/css/`: Contiene archivos CSS para estilos.

- `app/src/index.html`: Contiene la página HTML principal para el proyecto.

## Dependencias

Este proyecto usa las siguientes librerías:

- **Express.js**: Framework web para Node.js que proporciona una estructura básica para construir aplicaciones web y APIs.

- **Path**: Módulo nativo de Node.js para trabajar con rutas de archivos y directorios.

- **Nodemon**: Herramienta para reiniciar automáticamente el servidor cuando se detectan cambios en los archivos.

## Instalación y Configuración

Para instalar y configurar el proyecto, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Maure-dev/Trabajo-IDW.git
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia el servidor**:

   - **Nodemon**:

     ```bash
     npm run dev
     ```

   - **Node**:

     ```bash
     npm run start
     ```

## Uso del Proyecto

Una vez iniciado el servidor, puedes acceder a la página principal en http://localhost:3000/. Si haces cambios en el archivo `server.js` o en las **páginas HTML/CSS**, el servidor se reiniciará automáticamente gracias a **nodemon** (Si utilizaste la opción **Nodemon** para levantarlo).

## Licencia

Este proyecto está bajo la Licencia MIT. Véase el archivo LICENSE.
