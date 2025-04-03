
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Контактна інформація</h3>
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
              <a href="mailto:info@aestheticmd.com" className="hover:text-primary transition-colors">
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
            <h4 className="font-medium mb-1">Адреса</h4>
            <p className="text-muted-foreground">
              Київ, вул. Миколи Пимоненка, 8
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <Clock className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Години роботи</h4>
            <p className="text-muted-foreground">
              Понеділок – Субота: 9:00 – 20:00<br />
              Неділя: Вихідний
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
