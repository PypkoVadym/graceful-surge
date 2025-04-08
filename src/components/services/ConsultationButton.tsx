
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ConsultationButton = () => {
  return (
    <button 
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="inline-flex items-center text-primary font-medium hover:underline"
    >
      Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
    </button>
  );
};

export default ConsultationButton;
