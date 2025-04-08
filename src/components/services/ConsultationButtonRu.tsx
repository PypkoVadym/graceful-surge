
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ConsultationButtonRu = () => {
  return (
    <button 
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="inline-flex items-center text-primary font-medium hover:underline"
    >
      Записаться на бесплатную консультацию <ArrowRight className="ml-1" size={16} />
    </button>
  );
};

export default ConsultationButtonRu;
