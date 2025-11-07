// src/App.tsx

import React from 'react';
import type { JSX } from 'react';
import ChatWidget from './components/ChatWidget';

// --- Listas de contenido con Emojis en lugar de Iconos ---

const features = [
  {
    icon: "🧠", // Brain
    title: "Análisis Inteligente RAG",
    description: "Procesa y analiza notas clínicas con precisión usando IA de última generación"
  },
  {
    icon: "⏰", // Clock
    title: "Ahorro de Tiempo",
    description: "Reduce hasta 60% el tiempo en análisis de historiales clínicos"
  },
  {
    icon: "🛡️", // Shield
    title: "Privacidad Garantizada",
    description: "Cumplimiento total con normativas y protección de datos médicos"
  },
  {
    icon: "📄", // FileText
    title: "Resúmenes Detallados",
    description: "Genera resúmenes estructurados y hallazgos clave automáticamente"
  },
  {
    icon: "✅", // CheckCircle2
    title: "Detección de Patrones",
    description: "Identifica tendencias y anomalías en historiales médicos complejos"
  },
  {
    icon: "⚡", // Zap
    title: "Respuestas Instantáneas",
    description: "Obtén información crítica en segundos, no en horas"
  }
];

const steps = [
  {
    number: "01",
    title: "Pega tu Viñeta Clínica",
    description: "Escribe o pega el historial, estudios y documentación en el chat"
  },
  {
    number: "02",
    title: "El Sistema Analiza",
    description: "RAG procesa la información identificando datos relevantes y contexto"
  },
  {
    number: "03",
    title: "Obtén Insights Accionables",
    description: "Recibe resúmenes, hallazgos y correlaciones basadas en evidencia"
  }
];

const stats = [
  { value: "95%", label: "Precisión en Análisis" },
  { value: "60%", label: "Ahorro de Tiempo" },
  { value: "10K+", label: "Casos Procesados" },
  { value: "24/7", label: "Disponibilidad" }
];

// --- Componente Principal: La Landing Page ---

function App(): JSX.Element {

  return (
    // bg-white es un buen 'background' por defecto
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Patrón de grid sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container relative mx-auto px-4 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge (Tailwind puro) */}
            <span className="mb-4 inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full border border-white/30">
              ✨ Potenciado por IA Médica Avanzada
            </span>
            
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-6xl">
              Asistente Clínico Inteligente
              <span className="block text-white/90">con Tecnología RAG</span>
            </h1>
            
            <p className="mb-8 text-lg text-white/90 sm:text-xl max-w-2xl mx-auto">
              Analiza historiales clínicos en segundos. Proporciona insights detallados
              basados en evidencia científica para optimizar tus decisiones médicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Button (Tailwind puro) */}
              <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-glow hover:bg-white/90 transition-all group">
                Probar Gratis
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-all">
                Ver Demostración
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="mb-4 inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
              🩺 Características
            </span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Todo lo que Necesitas para Decisiones Informadas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Herramientas diseñadas específicamente para profesionales de la salud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              // Card (Tailwind puro)
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 transition-all hover:border-blue-500 hover:shadow-glow">
                <div className="bg-gradient-hero rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- How it Works Section --- */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="mb-4 inline-block bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-1 rounded-full">
              Proceso Simple
            </span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Cómo Funciona
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tres pasos para obtener análisis clínicos precisos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Live Demo Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/*
            * ¡AQUÍ ESTÁ LA MAGIA!
            * Simplemente llamamos a nuestro componente ChatWidget.
            * Él ya tiene su propio título ("Prueba el Asistente en Vivo")
            * y todo el estilo de "widget" (sombra, bordes, etc.)
            */}
          <ChatWidget />
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-6xl">👨‍⚕️</span> {/* Users Icon */}
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 mt-6">
              Únete a Miles de Profesionales de la Salud
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Comienza a optimizar tu práctica médica hoy. Prueba gratuita de 14 días,
              sin necesidad de tarjeta de crédito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-glow hover:bg-white/90 transition-all">
                Comenzar Prueba Gratuita
              </button>
              <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-all">
                Contactar Ventas
              </button>
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              ✓ Sin tarjeta de crédito ✓ Configuración instantánea ✓ Soporte 24/7
            </p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">
            <p>© 2025 Asistente Clínico RAG. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">Desarrollado con tecnología de IA médica avanzada</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;