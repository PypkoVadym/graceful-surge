
import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessageRu = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="text-primary mb-4">
        <CheckCircle size={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
      <p className="text-center text-muted-foreground">
        Спасибо! Мы свяжемся с вами в ближайшее время.
      </p>
    </div>
  );
};

export default SuccessMessageRu;
