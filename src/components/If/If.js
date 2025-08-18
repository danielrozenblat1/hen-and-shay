import React from 'react';
import { 
  Plane, 
  Home, 
  Clock, 
  Calendar, 
  Car, 
  ShieldCheck,
  Headphones,
  MapPin
} from 'lucide-react';
import styles from './If.module.css';
import Button from '../button/Button';

const BackgroundGlass = () => {
  const items = [
    {
      text: "מחפש חופשה מושלמת בלי כאב ראש",
      icon: <Calendar className={styles.icon} />
    },
    {
      text: "רוצה לחסוך זמן בתכנון החופשה",
      icon: <Clock className={styles.icon} />
    },
    {
      text: "מעוניין בדילים משתלמים לזוגות או משפחות",
      icon: <Home className={styles.icon} />
    },
    {
      text: "מחפש ליווי מקצועי ועזרה בזמן אמת בחו״ל",
      icon: <ShieldCheck className={styles.icon} />
    },
    {
      text: "רוצה חבילת נופש מותאמת אישית לצרכים שלך",
      icon: <Plane className={styles.icon} />
    },
    {
      text: "מעוניין בשירותים נלווים כמו השכרת רכב או כרטיסים להופעות",
      icon: <Car className={styles.icon} />
    }
  ];

  return <>
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>:אז אם את/ה</h1>
        
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardText}>{item.text}</span>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text="לחץ כאן לשיחת ייעוץ ללא התחייבות!"/>
    </div>
  </>;
};

export default BackgroundGlass;