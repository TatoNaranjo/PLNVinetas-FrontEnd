// src/components/WelcomeSection.tsx

import React from 'react';
import type { JSX } from 'react';

// Un ícono simple de SVG (puedes cambiarlo)
function LogoIcon(): JSX.Element {
  return (
    <svg
      className="h-10 w-10 text-blue-600"
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

function WelcomeSection(): JSX.Element {
  return (
    // Sección de Bienvenida con fondo blanco
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center">
          <LogoIcon />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Asistente Clínico (RAG)
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Potencia tu análisis clínico. Esta herramienta utiliza RAG
            (Retrieval-Augmented Generation) para proporcionarte un análisis
            detallado de viñetas clínicas basado en evidencia actualizada.
          </p>
        </div>

        {/* Guías (en 2 columnas) */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8">
          
          {/* Columna 1: Cómo Funciona */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-base text-gray-600">
              Este asistente está diseñado para ser intuitivo. Simplemente
              sigue estos pasos para obtener tu análisis:
            </p>
            <ul className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
              <li>Pega o escribe tu viñeta en el chat de abajo.</li>
              <li>Presiona "Enviar" y espera unos segundos.</li>
              <li>
                El asistente analizará la sintomatología, antecedentes y
                contexto.
              </li>
              <li>
                Recibirás una respuesta estructurada sugiriendo posibles
                correlaciones (Ej: F32.9, F33.1) y un resumen.
              </li>
            </ul>
          </section>

          {/* Columna 2: Guía de Viñetas */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Guía de Viñetas Efectivas
            </h2>
            <p className="text-base text-gray-600 mb-4">
              Para un análisis preciso, tu viñeta debe incluir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong className="font-medium">Identificación:</strong> Edad,
                género.
              </li>
              <li>
                <strong className="font-medium">Motivo de Consulta:</strong> Razón
                principal de la visita.
              </li>
              <li>
                <strong className="font-medium">Historia de la Enfermedad:</strong>{' '}
                Cronología y descripción de síntomas.
              </li>
              <li>
                <strong className="font-medium">Antecedentes:</strong> Médicos,
                familiares y psicosociales relevantes.
              </li>
              <li>
                <strong className="font-medium">Estado Mental/Físico:</strong>{' '}
                Hallazgos relevantes del examen.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;