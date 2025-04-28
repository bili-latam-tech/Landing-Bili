import { CheckCircleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const features = [
  {
    icon: <CheckCircleIcon className="h-10 w-10 text-blue-500" />,
    title: 'Automatiza tus finanzas',
    desc: 'Olvídate de los registros manuales. Captura tus gastos con una foto y deja que Bili haga el resto.'
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-500" />,
    title: 'Seguridad de tus datos',
    desc: 'Tus datos están protegidos con cifrado de nivel bancario. Solo tú tienes acceso a tu información.'
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-blue-500" />,
    title: 'Soporte personalizado',
    desc: 'Nuestro equipo está listo para ayudarte en cada paso de tu camino financiero.'
  },
];

export default function Features() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">{f.title}</h3>
              <p className="text-gray-600 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 