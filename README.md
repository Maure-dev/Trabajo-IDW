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

Este proyecto es una aplicación realizada con React Vite + Typescript y contiene funcionalidades de API realizado con Node Express.js.

Se requiere la creación de un sitio web que sirva como catálogo de alojamientos, que abarque una amplia variedad de opciones como casas, departamentos, hostel's, entre otros.

Este sitio proporciona una experiencia visual atractiva y de fácil uso, permitiendo a los visitantes realizar filtros para encontrar el alojamiento más adecuado a sus necesidades.

## Objetivo

El objetivo es crear interfaces de usuario interactivas, con diseño responsivo o adaptativo que se comuniquen con la citada API, permitiendo a los usuarios explorar el catálogo de alojamientos de manera sencilla.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- `src/components/assets/`: Contiene los archivos utilizados para logos e imágenes del proyecto.

- `src/components/interfaces`: Contiene los archivos de los componentes utilizados en cada página.

- `src/entities/`: Contiene el archivo donde se realiza la tipificación de los parámetros utilizados en los componentes.

- `src/routes/`: Contiene los archivos de las páginas y la configuración del ruteo de las mismas.

- `src/services/`: Contiene los archivos de los servicios utilizados en las páginas y la configuración del puerto de la API brindada por la cátedra.

## Dependencias

Este proyecto usa las siguientes librerías:

### Librerías para el usuario final

- **Axios**: Cliente HTTP basado en promesas para el navegador y Node.js, utilizado para hacer solicitudes HTTP de manera sencilla.

- **React**: Biblioteca de JavaScript para construir interfaces de usuario, particularmente para aplicaciones de una sola página.

- **React-DOM**: Proporciona métodos específicos para trabajar con el DOM en aplicaciones React.

- **React-Router-DOM**: Herramienta de enrutamiento para React, que permite gestionar la navegación y las URL en aplicaciones de una sola página.

### Librerías de desarrollo

- **@types/react**: Tipos de TypeScript para React, que proporcionan soporte de tipos para el desarrollo con TypeScript.

- **@types/react-dom**: Tipos de TypeScript para React-DOM, que ayudan a asegurar la compatibilidad de tipos en aplicaciones React.

- **@typescript-eslint/eslint-plugin**: Plugin de ESLint que soporta TypeScript, proporcionando reglas específicas para TypeScript.

- **@typescript-eslint/parser**: Parser de ESLint que permite a ESLint entender el código TypeScript.

- **@vitejs/plugin-react**: Plugin para integrar React con Vite, facilitando la configuración y optimización del proyecto.

- **Autoprefixer**: Herramienta para añadir prefijos específicos del navegador a las reglas CSS, mejorando la compatibilidad del CSS.

- **ESLint**: Herramienta de análisis de código estático para identificar y reportar patrones en JavaScript y TypeScript.

- **eslint-plugin-react-hooks**: Reglas específicas para los hooks de React, ayudando a mantener buenas prácticas en su uso.

- **eslint-plugin-react-refresh**: Plugin para habilitar la recarga rápida en desarrollo con React.

- **PostCSS**: Herramienta para transformar CSS con plugins, permitiendo añadir funcionalidades adicionales al CSS.

- **TailwindCSS**: Framework CSS que proporciona clases utilitarias para diseñar rápidamente interfaces de usuario.

- **TypeScript**: Superconjunto de JavaScript que añade tipos estáticos y otras características avanzadas.

- **Vite**: Herramienta de desarrollo frontend que proporciona un entorno rápido y moderno para el desarrollo de aplicaciones web.

## Instalación y Configuración

Para instalar y configurar el proyecto, sigue estos pasos:

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Maure-dev/Trabajo-IDW.git
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor**

   ```bash
   npm run dev
   ```

## Uso del Proyecto

Una vez iniciado el proyecto, puedes acceder a la página principal en http://localhost:3000/. Si haces cambios en el proyecto, el servidor se reiniciará automáticamente.

## Licencia

Este proyecto está bajo la Licencia MIT. Véase el archivo LICENSE.
