
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Повернутися на головну
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Політика конфіденційності</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Вступ</h2>
              <p>
                Ласкаво просимо до клініки Дениса Марковича. Ми поважаємо вашу приватність і зобов'язуємося захищати ваші особисті дані. Ця політика конфіденційності пояснює, як ми збираємо, використовуємо та зберігаємо ваші дані.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Які дані ми збираємо</h2>
              <p>
                Ми можемо збирати наступні типи інформації:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Особиста ідентифікаційна інформація (ім'я, контактні дані, медична історія)</li>
                <li>Технічна інформація (IP-адреса, тип браузера)</li>
                <li>Інформація про використання (як ви використовуєте наш веб-сайт)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Як ми використовуємо ваші дані</h2>
              <p>
                Ми використовуємо ваші дані для:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Надання медичних послуг</li>
                <li>Зв'язку з вами</li>
                <li>Покращення наших послуг</li>
                <li>Виконання законодавчих вимог</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Захист даних</h2>
              <p>
                Ми впровадили відповідні заходи безпеки для захисту ваших особистих даних від випадкової втрати, несанкціонованого доступу, зміни або розкриття.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Ваші права</h2>
              <p>
                Ви маєте право:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Отримати доступ до ваших особистих даних</li>
                <li>Вимагати виправлення неточної інформації</li>
                <li>Вимагати видалення ваших даних</li>
                <li>Відкликати свою згоду на обробку даних</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Зміни до цієї політики</h2>
              <p>
                Ми можемо періодично оновлювати нашу політику конфіденційності. Ми повідомимо вас про будь-які зміни, розмістивши нову політику на цій сторінці.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Контактна інформація</h2>
              <p>
                Якщо у вас виникли запитання щодо цієї політики конфіденційності або наших практик, будь ласка, зв'яжіться з нами:
              </p>
              <ul className="list-none pl-0 space-y-1 mt-2">
                <li><strong>Email:</strong> info@aestheticmd.com</li>
                <li><strong>Телефон:</strong> (063) 1234567</li>
                <li><strong>Адреса:</strong> м.Київ, вул. Хрещатик, 123</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
