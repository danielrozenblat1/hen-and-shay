import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './OurServices.module.css';
import travel from "../../Icons/wired-outline-1008-travel-agency-hover-roll.json"
import deals from "../../Icons/wired-outline-490-plane-aircraft-hover-pinch.json"
import hotels from "../../Icons/wired-outline-2049-dubai-city-hover-pinch.json"
import ticket from "../../Icons/wired-outline-759-ticket-coupon-hover-pinch.json"
import family from "../../Icons/wired-outline-635-family-hover-pinch (1).json"
import couple from "../../Icons/wired-outline-630-couple-man-woman-hover-pinch.json"
import attractions from "../../Icons/wired-outline-1108-ferris-wheel-hover-pinch.json"
import shows from "../../Icons/wired-outline-1059-music-stage-lights-concert-hover-pinch.json"
import car from "../../Icons/wired-outline-846-car-site-3-hover-pinch.json"
const OurServices = () => {
  // יצירת רפרנסים לכל אייקון
  const usersRef = useRef(null);
  const userPlusRef = useRef(null);
  const truckRef = useRef(null);
  const musicRef = useRef(null);
  const navigationRef = useRef(null);
  const homeRef = useRef(null);
  const tagRef = useRef(null);
  const globeRef = useRef(null);

  // פונקציות טיפול בסיום האנימציה
  const handleUsersComplete = () => {
    setTimeout(() => {
      usersRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleUserPlusComplete = () => {
    setTimeout(() => {
      userPlusRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleTruckComplete = () => {
    setTimeout(() => {
      truckRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleMusicComplete = () => {
    setTimeout(() => {
      musicRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleNavigationComplete = () => {
    setTimeout(() => {
      navigationRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleHomeComplete = () => {
    setTimeout(() => {
      homeRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleTagComplete = () => {
    setTimeout(() => {
      tagRef.current?.playFromBeginning();
    }, 1500);
  };
  
  const handleGlobeComplete = () => {
    setTimeout(() => {
      globeRef.current?.playFromBeginning();
    }, 1500);
  };

  useEffect(() => {
    // הפעלת האנימציה הראשונה לכל האייקונים
    usersRef.current?.playFromBeginning();
    userPlusRef.current?.playFromBeginning();
    truckRef.current?.playFromBeginning();
    musicRef.current?.playFromBeginning();
    navigationRef.current?.playFromBeginning();
    homeRef.current?.playFromBeginning();
    tagRef.current?.playFromBeginning();
    globeRef.current?.playFromBeginning();
  }, []);

  const services = [
    {
      name: "דילים ונופשים לזוגות",
      icon: <div className={styles.iconWrapper}>
              <Player ref={usersRef} icon={deals} size="100%" colorize="#40baba" onComplete={handleUsersComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על דילים ונופשים לזוגות"
    },
    {
      name: "דילים למשפחות עם ילדים",
      icon: <div className={styles.iconWrapper}>
              <Player ref={userPlusRef} icon={family} size="100%" colorize="#40baba" onComplete={handleUserPlusComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על דילים למשפחות עם ילדים"
    },
    {
      name: "השכרת רכבים",
      icon: <div className={styles.iconWrapper}>
              <Player ref={truckRef} icon={car} size="100%" colorize="#40baba" onComplete={handleTruckComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על השכרת רכבים"
    },
    {
      name: "הזמנת כרטיסים להופעות",
      icon: <div className={styles.iconWrapper}>
              <Player ref={musicRef} icon={shows} size="100%" colorize="#40baba" onComplete={handleMusicComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על הזמנת כרטיסים להופעות"
    },
    {
      name: "הזמנת כרטיסי טיסה",
      icon: <div className={styles.iconWrapper}>
              <Player ref={navigationRef} icon={ticket} size="100%" colorize="#40baba" onComplete={handleNavigationComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על הזמנת כרטיסי טיסה"
    },
    {
      name: "הזמנת בתי מלון",
      icon: <div className={styles.iconWrapper}>
              <Player ref={homeRef} icon={hotels} size="100%" colorize="#40baba" onComplete={handleHomeComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על הזמנת בתי מלון"
    },
    {
      name: "אטרקציות בחו״ל",
      icon: <div className={styles.iconWrapper}>
              <Player ref={tagRef} icon={attractions} size="100%" colorize="#40baba" onComplete={handleTagComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על אטרקציות בחו״ל"
    },
    {
      name: "חופשות בהתאמה אישית",
      icon: <div className={styles.iconWrapper}>
              <Player ref={globeRef} icon={travel} size="100%" colorize="#40baba" onComplete={handleGlobeComplete} />
            </div>,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על חופשות בהתאמה אישית"
    }
  ];

  const handleMoreInfoClick = (message) => {
    const phoneNumber = "+972508499883";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>סוגי השירותים שלנו:</h2>
      
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            {service.icon}
            <h3 className={styles.serviceName}>{service.name}</h3>
            <button 
              className={styles.moreInfoButton}
              onClick={() => handleMoreInfoClick(service.whatsappMessage)}
            >
              לעוד מידע
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;