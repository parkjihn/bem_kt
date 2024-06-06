import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <h1 className={styles.title}>Добро пожаловать в нашу службу технической поддержки</h1>
        <p className={styles.description}>Мы оказываем техническую поддержку для вашего оборудования.</p>
      </section>
      
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Наши услуги</h2>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>Поддержка системных блоков и их составляющих</li>
          <li className={styles.serviceItem}>Обслуживание устройств ввода и вывода</li>
          <li className={styles.serviceItem}>Настройка и поддержка сетевого оборудования</li>
        </ul>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Наши преимущества</h2>
        <ul className={styles.benefitList}>
          <li className={styles.benefitItem}>Квалифицированные специалисты</li>
          <li className={styles.benefitItem}>Быстрая и эффективная поддержка</li>
          <li className={styles.benefitItem}>Индивидуальный подход к каждому клиенту</li>
        </ul>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>Отзывы клиентов</h2>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>Отличный сервис! Быстро решили все проблемы с нашим оборудованием.</p>
          <p className={styles.testimonialAuthor}>- Иван Петров, ООО "ТехноСервис"</p>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>Профессиональная команда и отличная поддержка. Очень рекомендую!</p>
          <p className={styles.testimonialAuthor}>- Анна Смирнова, ЗАО "Компьютерные Решения"</p>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Контакты</h2>
        <p className={styles.contactInfo}>Адрес: г. Москва, ул. Техническая, д. 1</p>
        <p className={styles.contactInfo}>Телефон: +7 (495) 123-45-67</p>
        <p className={styles.contactInfo}>Email: support@techsupport.ru</p>
      </section>
    </div>
  );
}

export default Home;
