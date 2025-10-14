
import { ComponentType } from 'react';

export interface InfoCardData {
  title: string;
  icon: ComponentType<{ className?: string }>;
  points: string[];
  colorClasses: {
    bg: string;
    text: string;
    iconBg: string;
    iconText: string;
  };
}
