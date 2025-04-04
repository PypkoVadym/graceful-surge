
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfoRu = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <Phone className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Телефон</h4>
            <p className="text-muted-foreground">
              <a href="tel:+380 73 283 01 29" className="hover:text-primary transition-colors">
                +380 73 283 01 29
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <Mail className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-muted-foreground">
              <a href="mailto:Denismrkv4@gmail.com" className="hover:text-primary transition-colors">
                Denismrkv4@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <MapPin className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Адрес</h4>
            <p className="text-muted-foreground">
              Киев, ул. Николая Пимоненко, 8
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <Clock className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Часы работы</h4>
            <p className="text-muted-foreground">
              Понедельник – Суббота: 9:00 – 20:00<br />
              Воскресенье: Выходной
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoRu;
