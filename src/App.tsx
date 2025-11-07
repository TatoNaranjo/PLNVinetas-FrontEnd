// src/App.tsx

import React, { useState } from 'react';
import type {JSX} from 'react';
import WelcomeSection from './components/WelcomeSection';
// CAMBIO: Importamos los nuevos componentes
import ChatWidget from './components/ChatWidget';
import MetricsPage from './components/MetricsPage';

// Tipo para saber qué pestaña está activa
type View = 'chat' | 'metrics';

function App(): JSX.Element {
  // Estado para manejar la pestaña activa
  const [activeView, setActiveView] = useState<View>('chat');

  // Función para obtener las clases CSS de la pestaña
  const getTabClass = (view: View) => {
    const base = 'py-3 px-6 font-medium text-lg rounded-t-lg focus:outline-none transition-all duration-200';
    if (activeView === view) {
      // Pestaña activa
      return `${base} bg-white text-blue-600 shadow-sm`;
    }
    // Pestaña inactiva
    return `${base} text-gray-500 hover:text-gray-800 hover:bg-gray-100`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. SECCIÓN DE BIENVENIDA (No cambia) */}
      <WelcomeSection />

      {/* 2. NAVEGACIÓN DE PESTAÑAS (NUEVO) */}
      {/* Colocamos esto justo debajo de la sección de bienvenida */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-2" aria-label="Tabs">
            <button
              onClick={() => setActiveView('chat')}
              className={getTabClass('chat')}
            >
              Asistente (Chat)
            </button>
            <button
              onClick={() => setActiveView('metrics')}
              className={getTabClass('metrics')}
            >
              Métricas (NLP)
            </button>
          </nav>
        </div>
      </div>

      {/* 3. CONTENIDO CONDICIONAL (NUEVO) */}
      {/* Muestra un componente u otro basado en el estado 'activeView' */}
      {activeView === 'chat' && <ChatWidget />}
      {activeView === 'metrics' && <MetricsPage />}
    </div>
  );
}

export default App;