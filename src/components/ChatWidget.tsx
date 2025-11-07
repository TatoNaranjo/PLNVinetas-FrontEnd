// src/components/ChatWidget.tsx

import React, { useState, useRef, useEffect } from 'react';
import type { FormEvent, ChangeEvent, JSX } from 'react';
// --- Tipos ---
type ApiSuccessResponse = { respuesta: string };
type ApiErrorResponse = { error: string };
type ApiResponse = ApiSuccessResponse | ApiErrorResponse;
interface Message { role: 'user' | 'assistant'; content: string; }

// --- Componente de Carga (Spinner) ---
function LoadingSpinner(): JSX.Element {
  return (
    <svg
      className="animate-spin h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

// --- Componente Principal del Widget de Chat ---
function ChatWidget(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatEndRef = useRef<null | HTMLDivElement>(null);
  const API_URL = 'http://localhost:8000/api/analizar_chat/';

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLoading || !input.trim()) return;
    const newUserMessage: Message = { role: 'user', content: input };
    const newHistory = [...messages, newUserMessage];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: newHistory }),
      });
      const data: ApiResponse = await response.json();
      if (!response.ok) {
        const errorMessage =
          (data as ApiErrorResponse).error || `Error: ${response.status}`;
        throw new Error(errorMessage);
      }
      if ('respuesta' in data) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.respuesta,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        setError('La respuesta del servidor no fue válida.');
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('No se pudo conectar al servidor.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="chat-app" className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-8">
        Prueba el Asistente en Vivo
      </h2>

      <div className="flex flex-col h-[70vh] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xl p-4 rounded-lg shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                <p className="whitespace-pre-wrap text-base font-sans">
                  {msg.content}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-lg shadow-sm">
                <LoadingSpinner />
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Error en el Análisis</h3>
              <p>{error}</p>
            </div>
          )}

          <div ref={chatEndRef} />
        </main>

        <footer className="border-t border-gray-200 bg-white p-4">
          <form onSubmit={handleSubmit} className="flex space-x-3">
            <input
              type="text"
              className="flex-1 p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Escribe tu viñeta aquí..."
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Enviar
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default ChatWidget;