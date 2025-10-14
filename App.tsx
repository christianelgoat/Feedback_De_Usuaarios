
import React from 'react';
import { InfoCardData } from './types';
import CheckCircleIcon from './components/icons/CheckCircleIcon';
import WrenchIcon from './components/icons/WrenchIcon';
import QuestionMarkCircleIcon from './components/icons/QuestionMarkCircleIcon';
import LightBulbIcon from './components/icons/LightBulbIcon';
import InfoCard from './components/InfoCard';

const feedbackData: InfoCardData[] = [
  {
    title: "Opiniones Positivas",
    icon: CheckCircleIcon,
    points: [
      'La mayoría de los usuarios la considera "fácil de usar", "amigable" e "intuitiva".',
      'Se valora la simplicidad y la rapidez en comparación con métodos manuales ("Es mucho más rápido que anotarlo en mi cuaderno").',
      'Se reconoce el "buen potencial" de la herramienta para solucionar un problema real del negocio.',
    ],
    colorClasses: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-800',
        iconBg: 'bg-emerald-200',
        iconText: 'text-emerald-700',
    },
  },
  {
    title: "Críticas Constructivas",
    icon: WrenchIcon,
    points: [
      'El diseño de la interfaz es el punto más criticado: se percibe como "muy básico", "estático" y poco atractivo visualmente.',
      'Falta de feedback visual: Varios usuarios no estaban 100% seguros de que sus datos se guardaron y pidieron una confirmación más clara.',
      'Confusión en la terminología y funcionalidad de ciertos campos y botones ("SKU", "Stock Mínimo", "Solo Alertas").',
      'Problemas de integridad de datos: Un usuario notó que se podían crear productos duplicados con el mismo nombre.',
    ],
    colorClasses: {
        bg: 'bg-amber-50',
        text: 'text-amber-800',
        iconBg: 'bg-amber-200',
        iconText: 'text-amber-700',
    },
  },
  {
    title: "Preguntas del Usuario",
    icon: QuestionMarkCircleIcon,
    points: [
      "¿A qué se refiere 'Stock Mínimo'? ¿Es cuando debo hacer un nuevo pedido?",
      "¿Qué significa exactamente el campo 'Cantidad' en la sección de movimientos?",
      "¿Cómo puedo ver con más detalle los ingresos y salidas de un producto específico?",
    ],
    colorClasses: {
        bg: 'bg-sky-50',
        text: 'text-sky-800',
        iconBg: 'bg-sky-200',
        iconText: 'text-sky-700',
    },
  },
  {
    title: "Nuevas Ideas",
    icon: LightBulbIcon,
    points: [
      'Dashboard y KPIs: La idea más solicitada. Añadir indicadores, gráficos y botones de atajo en la página principal.',
      'Onboarding y Ayuda: Crear una guía o un "bot asistente" para los nuevos usuarios.',
      'Filtros y Búsqueda: Implementar una barra de búsqueda o filtros para encontrar productos rápidamente.',
      'Funcionalidades Adicionales: Permitir subir imágenes de los productos.',
    ],
    colorClasses: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-800',
        iconBg: 'bg-indigo-200',
        iconText: 'text-indigo-700',
    },
  },
];

const App: React.FC = () => {
  return (
    <main className="bg-slate-100 min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800">
            Resumen de Feedback de Usuarios
          </h1>
          <p className="mt-4 text-lg text-slate-600">
           
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {feedbackData.map((data, index) => (
            <InfoCard key={index} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
