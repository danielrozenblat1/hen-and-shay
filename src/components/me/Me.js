import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import hen from "../../images/חן ימיני.png";
import shay from "../../images/שי ימיני.png";
import { Player } from '@lordicon/react';
import time from "../../Icons/wired-lineal-45-clock-time-hover-pinch (1).json";
import Recommends from '../recommends/Recommends';
import money from "../../Icons/wired-lineal-414-money-bag-dollar-hover-shake (10).json"
import map from "../../Icons/wired-lineal-106-map-hover-pinch.json"
import vip from "../../Icons/wired-lineal-1353-membership-vip-card-hover-pinch.json"
import price from "../../Icons/wired-lineal-299-coins-dollar-hover-jump.json"
const AboutUs = () => {
  // יצירת רפרנסים לאייקונים
  const targetRef = useRef(null);
  const clockRef = useRef(null);
  const mapPinRef = useRef(null);
  const phoneRef = useRef(null);
  const globeRef = useRef(null);

  // פונקציות טיפול בסיום האנימציה
  const handleTargetComplete = () => {
    setTimeout(() => {
      targetRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleClockComplete = () => {
    setTimeout(() => {
      clockRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleMapPinComplete = () => {
    setTimeout(() => {
      mapPinRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handlePhoneComplete = () => {
    setTimeout(() => {
      phoneRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleGlobeComplete = () => {
    setTimeout(() => {
      globeRef.current?.playFromBeginning();
    }, 1500);
  };

  // הפעלת האנימציות בטעינה ראשונית
  useEffect(() => {
    targetRef.current?.playFromBeginning();
    clockRef.current?.playFromBeginning();
    mapPinRef.current?.playFromBeginning();
    phoneRef.current?.playFromBeginning();
    globeRef.current?.playFromBeginning();
  }, []);

  // אפקט Intersection Observer עבור אנימציות הופעה בגלילה
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
        </div>

        <div className={`${styles.titleContainer} ${styles.fadeIn}`} style={{ marginTop: '2rem' }}>
          <h1 className={styles.title}>ולמה שתסגרו חופשה דרכנו?</h1>
        </div>
        
        <div className={styles.advantages}>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.1s' }}>
            <div className={styles.icon}>
              <Player 
                ref={targetRef}
                icon={money}
                size="100%"
    
                onComplete={handleTargetComplete}
              />
            </div>
            <h3>חיסכון בכסף</h3>
            <p>תנו לנו יעד ונמצא לכם את האפשרות הכי טובה לחוויה הכי נעימה</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.icon}>
              <Player 
                ref={clockRef}
                icon={time}
                size="100%"
               
                onComplete={handleClockComplete}
              />
            </div>
            <h3>חיסכון בזמן</h3>
            <p> בנוסף, אנחנו מתכננים לכם מה שהיינו רוצים לעצמנו</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.icon}>
              <Player 
                ref={mapPinRef}
                icon={map}
                size="100%"
               
                onComplete={handleMapPinComplete}
              />
            </div>
            <h3>תכנון מראש</h3>
            <p>טיסות, מלון, השכרת רכב, כרטיסים להופעות, אטרקציות ועוד – הכל מתואם ומסודר מראש, כך שתוכלו ליהנות בראש שקט.</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.icon}>
              <Player 
                ref={phoneRef}
                icon={vip}
                size="100%"
               
                onComplete={handlePhoneComplete}
              />
            </div>
            <h3>שירות אישי וזמינות מלאה</h3>
            <p>אנחנו כאן בשבילכם! ליווי וי-איי-פי לאורך כל הדרך, עם התאמה אישית של המלון והחופשה לפי הצרכים והרצונות שלכם. יש לנו תמיכה של מערכת מורכבת מ40 איש שנותנת מענה לכל בעיה במידת הצורך, ומעניקה לנו כלים זמינים לתת לכם את השירות הטוב ביותר.</p>
          </div>
          <div className={`${styles.advantageItem} ${styles.fadeIn}`} style={{ animationDelay: '0.5s' }}>
            <div className={styles.icon}>
              <Player 
                ref={globeRef}
                icon={price}
                size="100%"
               
                onComplete={handleGlobeComplete}
              />
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