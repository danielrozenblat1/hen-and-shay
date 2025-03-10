import React from 'react';
import styles from './FirstScreen.module.css';

const FirstScreen = () => {
  const scrollToSection = () => {
    // Set a timeout of 1.2 seconds (1200 milliseconds)
    setTimeout(() => {
      const section = document.getElementById("התחלנו");
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

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