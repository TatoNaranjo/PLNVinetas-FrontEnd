// src/components/Sidebar.tsx

import type { JSX } from 'react';

// Un ícono simple de SVG para el logo (puedes cambiarlo)
function LogoIcon(): JSX.Element {
  return (
    <svg
      className="h-8 w-8 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function Sidebar(): JSX.Element {
  return (
    <div className="flex h-screen w-80 flex-col border-r border-gray-200 bg-white p-6">
      {/* 1. Encabezado y Logo */}
      <header className="mb-8 flex items-center space-x-3">
        <LogoIcon />
        <h1 className="text-xl font-bold text-gray-800">Asistente Clínico</h1>
      </header>

      {/* 2. Contenido de la Guía */}
      <div className="flex-1 overflow-y-auto pr-2">
        {/* Sección: Cómo Funciona */}
        <section className="mb-6">
          <h2 className="mb-2 text-sm font-semibold uppercase text-gray-500">
            Cómo Funciona
          </h2>
          <p className="text-sm text-gray-600">
            Este asistente utiliza un modelo RAG (Retrieval-Augmented Generation)
            para analizar viñetas clínicas. Simplemente pega o escribe tu
            viñeta en el chat y el asistente proporcionará un análisis
            basado en la información clínica más reciente.
          </p>
        </section>

        {/* Sección: Guía de Viñetas */}
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500">
            Guía de Viñetas Clínicas
          </h2>
          <p className="mb-3 text-sm text-gray-600">
            Para un análisis preciso, incluye los siguientes componentes:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong className="font-medium">Identificación del Paciente:</strong>{' '}
              Edad, género, etc. (Ej: "Paciente masculino de 45 años...").
            </li>
            <li>
              <strong className="font-medium">Motivo de Consulta:</strong> La
              razón principal de la visita.
            </li>
            <li>
              <strong className="font-medium">Historia de la Enfermedad:</strong>{' '}
              Cronología y descripción de los síntomas.
            </li>
            <li>
              <strong className="font-medium">Antecedentes:</strong> Médicos,
              quirúrgicos, familiares y psicosociales.
            </li>
            <li>
              <strong className="font-medium">Examen Físico:</strong> Hallazgos
              relevantes.
            </li>
          </ul>
        </section>
      </div>

      {/* Footer de la Sidebar */}
      <footer className="mt-6 border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-400">
          © 2025 Instituto Médico. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;