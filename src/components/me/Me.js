import React, { useEffect } from 'react';
import styles from './Me.module.css';
import hen from "../../images/חן ימיני.png";
import shay from "../../images/שי ימיני.png";
import { Clock, Target, Globe, Phone, MapPin, Shield } from 'lucide-react';
import Recommends from '../recommends/Recommends';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "חן ימיני",
      image: hen,
    },
    {
      name: "שי ימיני",
      image: shay,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll(`.${styles.fadeIn}`).forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.titleContainer} ${styles.fadeIn}`}>
          <div className={styles.title}>בואו נכיר</div>
     
        </div>

        <div className={`${styles.teamContainer} ${styles.fadeIn}`}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={`${styles.teamMember} ${styles.fadeIn}`}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.description} ${styles.fadeIn}`}>
          <p>
            הסיפור שלנו ב-S&H TRAVEL התחיל מתשוקה אמיתית לעולם התיירות ומהבנה עמוקה של הצרכים של המטייל הישראלי. כמטיילים בעצמנו, חווינו את האתגרים והדאגות שמלוות כל טיול - מהחשש להסתבך במדינה זרה ועד הרצון למקסם כל רגע מהחופשה.
          </p>
          <p>
            אנחנו מאמינים שטיול מושלם מתחיל בתכנון מדויק והתאמה אישית. כחלק מרשת מקצועית מובילה, אנחנו מספקים לא רק שירותי תיירות, אלא ביטחון ושקט נפשי לאורך כל הדרך. הניסיון העשיר שלנו והקשרים הענפים שפיתחנו עם ספקים ובתי מלון ברחבי העולם מאפשרים לנו להציע לכם את החבילות המשתלמות ביותר.
          </p>
          <p>
            מהסטטיסטיקה שלנו עולה כי כ-30% מהמטיילים העצמאיים חווים תקלות במהלך טיוליהם - החל מביטולי טיסות ועד בעיות עם בתי מלון. אצלנו, כל לקוח מקבל ליווי צמוד מרגע התכנון ועד החזרה הביתה, עם מענה מיידי לכל אתגר שעולה בדרך.
          </p>
        </div>

        <div className={`${styles.titleContainer} ${styles.fadeIn}`} style={{ marginTop: '2rem' }}>
          <h1 className={styles.title}>ולמה שתסגרו חופשה דרכנו?</h1>
        </div>
        

        <div className={styles.advantages}>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.1s' }}>
            <div className={styles.icon}>
              <Target size={26} color="#009688" strokeWidth={1.2} />
            </div>
            <h3>חיסכון בכסף</h3>
            <p>תנו לנו יעד – ואנחנו נמצא עבורכם את האפשרויות המשתלמות ביותר בהתאם לתקציב שלכם!</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.icon}>
              <Clock size={26} color="#009688" strokeWidth={1.2} />
            </div>
            <h3>חיסכון בזמן</h3>
            <p>אנחנו נעשה את כל הבדיקות, ההזמנות והסידורים, כדי שתוכלו להתרכז רק בליהנות.</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.icon}>
              <MapPin size={26} color="#009688" strokeWidth={1.2} />
            </div>
            <h3>תכנון מראש</h3>
            <p>טיסות, מלון, השכרת רכב, כרטיסים להופעות, אטרקציות ועוד – הכל מתואם ומסודר מראש, כך שתוכלו ליהנות בראש שקט.</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.icon}>
              <Phone size={26} color="#009688" strokeWidth={1.2} />
            </div>
            <h3>שירות אישי וזמינות מלאה</h3>
            <p>אנחנו כאן בשבילכם! ליווי וי-איי-פי לאורך כל הדרך, עם התאמה אישית של המלון והחופשה לפי הצרכים והרצונות שלכם.</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.5s' }}>
            <div className={styles.icon}>
              <Globe size={26} color="#009688" strokeWidth={1.2} />
            </div>
            <h3>המחיר הטוב ביותר</h3>
            <p>נמצא לכם את המלון הכי שווה ואת הטיסה המשתלמת ביותר בתאריכים שתבחרו – ללא עלות נוספת! כבר סגורים על מלון? נאתר עבורכם את המחיר הכי זול – בלי שתצטרכו להתאמץ.</p>
          </div>
        </div>
      </div>
    </div>

    <Recommends/>
  </>
};

export default AboutUs;