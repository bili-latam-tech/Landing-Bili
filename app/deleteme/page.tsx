'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteAccountPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    reason: ''
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la cuenta');
      }

      // Redirect to home page after successful deletion
      router.push('/');
    } catch (err) {
      setError('Ocurrió un error al intentar eliminar tu cuenta. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Eliminar Tu Cuenta en Bili
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Proceso de eliminación de cuenta en Bili
          </p>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-semibold text-white">Proceso de Eliminación</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Ingresa tu correo electrónico asociado a tu cuenta de Bili</li>
            <li>Proporciona la razón por la que deseas eliminar tu cuenta</li>
            <li>Haz clic en "Eliminar Mi Cuenta"</li>
            <li>Recibirás un correo de confirmación</li>
            <li>Tu cuenta será eliminada permanentemente en un plazo de 30 días</li>
          </ol>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-semibold text-white">Datos que se Eliminarán</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Información personal (nombre, correo electrónico, foto de perfil)</li>
            <li>Historial de actividad</li>
            <li>Preferencias y configuraciones</li>
            <li>Datos de la cuenta</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-semibold text-white">Datos que se Conservarán</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Registros de transacciones (por 5 años por requerimientos legales)</li>
            <li>Registros de actividad sospechosa (por 2 años por seguridad)</li>
          </ul>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-900/50 p-4">
              <div className="text-sm text-red-200">{error}</div>
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-[#1A1A1A] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-300">
                Razón de la eliminación
              </label>
              <textarea
                id="reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-[#1A1A1A] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Por favor, cuéntanos por qué deseas eliminar tu cuenta..."
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Eliminando...' : 'Eliminar Mi Cuenta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 