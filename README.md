# PLNVinetas-FrontEnd :speech_balloon:

## By: TatoNaranjo | Santiago Naranjo Herrera & Daniel Steven Hincapié Cetina

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


## Tabla de Contenidos :page_with_curl:
- [Qué es PLNVinetas-FrontEnd](#qué-es-plnvinetas-frontend)
- [Dependencias](#dependencias)
- [Pasos de Instalación](#pasos-de-instalación)
- [Notas Adicionales](#notas-adicionales)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Qué es PLNVinetas-FrontEnd? :book:
`PLNVinetas-FrontEnd` es una interfaz de chat moderna construida con **React** y **TypeScript**, utilizando **Vite** para el empaquetado y **Tailwind CSS** para los estilos.

Esta aplicación consume la API del proyecto [psicologiaPLN](https://github.com/TatoNaranjo/psicologiaPLN). Permite a un usuario (como un psicólogo) enviar viñetas clínicas a un asistente de IA local. El chat es capaz de mantener una conversación y, cuando detecta una viñeta, consulta al backend para obtener un análisis RAG (Generación Aumentada por Recuperación) basado en un corpus del DSM.

## Dependencias :warning:
* [Node.js](https://nodejs.org/) (versión 18+ recomendada)
* Un gestor de paquetes de Node (`npm`, `yarn`, o `pnpm`)
* **Importante:** El [backend psicologiaPLN](https://github.com/TatoNaranjo/psicologiaPLN) debe estar corriendo en `http://localhost:8000`.

## Pasos de Instalación :checkered_flag:

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/TatoNaranjo/PLNVinetas-FrontEnd](https://github.com/TatoNaranjo/PLNVinetas-FrontEnd)
    cd PLNVinetas-FrontEnd
    ```

2.  **Instala las dependencias de Node**
    ```bash
    npm install
    ```

3.  **Asegúrate de que el Backend esté corriendo**
    * En otra terminal, asegúrate de que tanto el servidor de **Ollama** como el servidor de **Django** (`psicologiaPLN`) estén en ejecución.
    * El backend debe estar accesible en `http://localhost:8000`.

4.  **Inicia el servidor de desarrollo de Vite**
    ```bash
    npm run dev
    ```
    * La aplicación estará disponible en `http://localhost:5173`.

## Notas adicionales :construction:
-   Este proyecto es **solo el frontend**. No funcionará si el backend `psicologiaPLN` y el servidor de Ollama no están corriendo.
-   El `App.tsx` está configurado para hacer peticiones a `http://localhost:8000/api/analizar_chat/`.
-   Los estilos están definidos con clases de utilidad de **Tailwind CSS**.

## Licencia :door:
Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT).

## Contacto :computer:
Para preguntas o comentarios, puedes contactarme a través de mi [correo electrónico](mailto:naranjosa2004@gmail.com).
