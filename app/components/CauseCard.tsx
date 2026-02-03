import React from 'react';
import { LucideIcon } from 'lucide-react';

type CauseCardProps = {
  number: string;
  title: string;
  description: string | React.ReactNode;
  bgColor: string;
  icon?: LucideIcon;
};

export default function CauseCard({
  number,
  title,
  description,
  bgColor,
  icon: Icon,
}: CauseCardProps) {
  return (
    <div className={`p-8 rounded-xl shadow-lg ${bgColor} text-white`}>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl font-bold opacity-30">{number}</span>
        {Icon && <Icon size={48} />}
      </div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <div className="text-white/90 space-y-3">{description}</div>
    </div>
  );
}