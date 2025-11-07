// src/components/MetricsPage.tsx

import React, { useState, useEffect} from 'react';
import type { JSX } from 'react';

interface NlpMetrics {
  spacy_model: string;
  vector_dimensions: number;
  knowledge_base_size: number;
  llm_model: string;
  rag_similarity_threshold: number;
  rag_top_k: number;
  clinical_intensifiers: number;
}

// Un componente de tarjeta reutilizable para las métricas
function MetricCard({ title, value }: { title: string, value: string | number }): JSX.Element {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-2 text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
}

function MetricsPage(): JSX.Element {
const [metrics, setMetrics] = useState<NlpMetrics | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await fetch('http://localhost:8000/api/get_nlp_metrics/');

        // CAMBIO 1: Obtenemos el JSON sin forzar el tipo NlpMetrics todavía.
        // TypeScript lo tratará como 'any' o 'unknown'.
        const data = await response.json();

        // CAMBIO 2: Si la respuesta NO es OK (ej. 404, 500),
        // leemos el 'data.error' que enviará Django.
        if (!response.ok) {
          // Usamos el 'data.error' o un mensaje genérico
          const errorMessage = data.error || `Error ${response.status}: ${response.statusText}`;
          throw new Error(errorMessage);
        }

        // CAMBIO 3: Si llegamos aquí, la respuesta SÍ fue OK (200).
        // Ahora podemos asignar 'data' a los métrics con seguridad.
        // El 'if (data.error)' original ya no es necesario aquí.
        setMetrics(data);

      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : 'No se pudo conectar al servidor.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMetrics();
  }, []); // El array vacío asegura que esto se ejecute solo una vez (al montar)

  if (isLoading) {
    return (
      <p className="text-center text-gray-600 py-20">
        Cargando métricas...
      </p>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Error al Cargar Métricas</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!metrics) {
    return <p className="text-center py-20">No se encontraron métricas.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-10">
        Métricas del Sistema NLP
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard title="Modelo LLM (Generación)" value={metrics.llm_model} />
        <MetricCard title="Modelo NLP (Vectores)" value={metrics.spacy_model} />
        <MetricCard title="Base de Conocimiento" value={`${metrics.knowledge_base_size} documentos`} />
        <MetricCard title="Dimensiones de Vectores" value={metrics.vector_dimensions} />
        <MetricCard title="Umbral de Similitud (RAG)" value={metrics.rag_similarity_threshold} />
        <MetricCard title="Documentos (Top-K)" value={metrics.rag_top_k} />
        <MetricCard title="Intensificadores Clínicos" value={metrics.clinical_intensifiers} />
      </div>
    </div>
  );
}

export default MetricsPage;