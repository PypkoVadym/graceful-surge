
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse = () => {
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
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Умови користування</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Прийняття умов</h2>
              <p>
                Вітаємо у клініці Дениса Марковича. Використовуючи наш веб-сайт, ви погоджуєтеся з цими умовами користування. Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте наш веб-сайт.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Ліцензія на використання</h2>
              <p>
                Ми надаємо вам невиключну, відкличну ліцензію на доступ та використання нашого веб-сайту для особистих, некомерційних цілей. Ця ліцензія не дозволяє:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Модифікувати або копіювати матеріали</li>
                <li>Використовувати матеріали для комерційних цілей</li>
                <li>Намагатися декомпілювати або реконструювати програмне забезпечення</li>
                <li>Видаляти будь-які авторські права чи інші позначення власності</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Медична інформація</h2>
              <p>
                Інформація на нашому веб-сайті надається виключно в інформаційних цілях. Вона не замінює професійну медичну консультацію, діагностику або лікування. Завжди звертайтеся до лікаря з будь-якими питаннями щодо вашого здоров'я.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Точність матеріалів</h2>
              <p>
                Матеріали на нашому веб-сайті надаються "як є". Ми не даємо гарантій щодо точності, повноти чи придатності інформації на нашому веб-сайті для будь-яких конкретних цілей.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Обмеження відповідальності</h2>
              <p>
                Ми не несемо відповідальності за будь-які збитки, що виникають внаслідок використання або неможливості використання матеріалів на нашому веб-сайті, навіть якщо ми або наш представник був повідомлений про можливість таких збитків.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Зміни в умовах користування</h2>
              <p>
                Ми можемо переглядати ці умови користування в будь-який час без попередження. Продовжуючи використовувати цей веб-сайт після публікації будь-яких змін, ви погоджуєтеся з цими змінами.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Застосовне право</h2>
              <p>
                Ці умови регулюються та тлумачаться відповідно до законів України, і ви безповоротно підпорядковуєтесь виключній юрисдикції судів у цій державі.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Контактна інформація</h2>
              <p>
                Якщо у вас є будь-які запитання щодо цих умов користування, будь ласка, зв'яжіться з нами:
              </p>
              <ul className="list-none pl-0 space-y-1 mt-2">
                <li><strong>Email:</strong> Denismrkv4@gmail.com</li>
                <li><strong>Телефон:</strong> +380 73 283 01 29</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
