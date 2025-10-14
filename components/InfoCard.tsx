
import React from 'react';
import { InfoCardData } from '../types';

interface InfoCardProps {
  data: InfoCardData;
}

const InfoCard: React.FC<InfoCardProps> = ({ data }) => {
  const { title, icon: Icon, points, colorClasses } = data;

  return (
    <div className={`rounded-xl shadow-lg p-6 flex flex-col h-full ${colorClasses.bg}`}>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg ${colorClasses.iconBg}`}>
          <Icon className={`h-6 w-6 ${colorClasses.iconText}`} />
        </div>
        <h2 className={`ml-4 text-xl font-bold ${colorClasses.text}`}>{title}</h2>
      </div>
      <ul className="space-y-3 list-inside">
        {points.map((point, index) => (
          <li key={index} className={`flex items-start ${colorClasses.text}`}>
            <span className={`mr-3 mt-1 flex-shrink-0 h-2 w-2 rounded-full ${colorClasses.iconBg}`}></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
