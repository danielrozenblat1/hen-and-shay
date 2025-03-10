import { useEffect, useState, useRef } from 'react';
import { Clock, Map, Shield, Headphones } from 'lucide-react';
import styles from './Steps.module.css';
import Button from '../button/Button';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "חיסכון בזמן ומשאבים",
      content: "במקום לבזבז שעות על חיפוש טיסות ומלונות, אנחנו עושים את העבודה בשבילך. מנצלים את הקשרים והניסיון שלנו למציאת הדילים הטובים ביותר המותאמים בדיוק לצרכים שלך",
      icon: Clock
    },
    {
      number: 2,
      title: "מומחיות וידע מקצועי",
      content: "אנחנו מכירים את היעדים מקרוב, יודעים איפה כדאי להתמקם, אילו אטרקציות שוות את הזמן שלך, ואיך להתאים את הטיול בדיוק למה שאתם מחפשים",
      icon: Map
    },
    {
      number: 3,
      title: "ביטחון ותמיכה",
      content: "נותנים לך שקט נפשי עם גיבוי מלא בזמן הטיול. יש לנו קשרים ישירים עם בתי המלון והספקים המקומיים, ואנחנו זמינים 24/7 לכל בעיה שצצה",
      icon: Shield
    },
    {
      number: 4,
      title: "פתרון מיידי לבעיות",
      content: "מטיפול בביטול טיסות ועד עזרה במציאת חדר חלופי במלון - אנחנו כאן בשבילך. הניסיון שלנו עוזר לפתור במהירות בעיות שעלולות להרוס את החופשה",
      icon: Headphones
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return <>
    <div className={styles.container} >
      <div className={styles.description}>לפני שנתחיל לתכנן את הטיול שלכם, חשוב לנו שתבינו</div>
      <div className={styles.title}>למה שבכלל תצטרכו סוכן נסיעות?</div>
      <div className={styles.content}>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear',
                background: 'linear-gradient(180deg, #40BABA 0%, #2DA5A5 100%)'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
                style={{
                  borderColor: '#2DA5A5',
                  background: visibleSteps.has(step.number) 
                    ? 'linear-gradient(135deg, #40BABA 0%, #2DA5A5 100%)'
                    : '#FFFFFF'
                }}
              >
                <step.icon className={styles.iconStyle} size={24} 
                  color={visibleSteps.has(step.number) ? '#FFFFFF' : '#2DA5A5'} />
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle} style={{ color: '#40BABA' }}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Button text="חן ושי, בואו נדבר!"/>
  </>
};

export default Timeline;