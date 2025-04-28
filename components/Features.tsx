import { CheckCircleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <CheckCircleIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Automatiza tus finanzas',
    desc: 'Olvídate de los registros manuales. Captura tus gastos con una foto y deja que Bili haga el resto.'
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Seguridad de tus datos',
    desc: 'Tus datos están protegidos con cifrado de nivel bancario. Solo tú tienes acceso a tu información.'
  },
  {
    icon: <UserGroupIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Soporte personalizado',
    desc: 'Nuestro equipo está listo para ayudarte en cada paso de tu camino financiero.'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-800/30 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Características que te encantarán
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre cómo Bili puede transformar tu forma de manejar las finanzas
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="group relative flex flex-col items-center text-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 dark:from-gray-700/50 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 