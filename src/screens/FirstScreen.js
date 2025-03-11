import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import Loader from '../components/Loader/Loader';
import background from "../images/רקע 1.jpg"
const FirstScreen = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = background ;
    
    backgroundImage.onload = () => {
      setImageLoaded(true);
    };
    
    // אם התמונה כבר נטענה מהמטמון (cache)
    if (backgroundImage.complete) {
      setImageLoaded(true);
    }
    
    return () => {
      // ניקוי ה-listener כשהקומפוננטה מתפרקת
      backgroundImage.onload = null;
    };
  }, []);

  const scrollToSection = () => {
    // Set a timeout of 1.2 seconds (1200 milliseconds)
    setTimeout(() => {
      const section = document.getElementById("התחלנו");
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  // Return just the loader if the image isn't loaded yet
  if (!imageLoaded) {
    return <Loader />;
  }

  // Return the full component once the image is loaded
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>מתכננים חופשה בקרוב?</h1>
        <p className={styles.subtitle}>
          אנחנו כאן לוודא שהיא תעבור בלי תקלות
        </p>
        <p className={styles.asterisk}>
          *מותאם גם לחופשות בארץ וגם לחופשות בחו"ל*
        </p>
        <button 
          className={styles.button} 
          onClick={scrollToSection}
        >
          תחגרו ותלחצו להמראה
        </button>
      </div>
    </div>
  );
};

export default FirstScreen;