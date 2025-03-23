
import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
        <CheckCircle className="text-primary" size={32} />
      </div>
      <h4 className="text-xl font-medium mb-2">Дякуємо!</h4>
      <p className="text-muted-foreground mb-4">
        Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
      </p>
    </div>
  );
};

export default SuccessMessage;
