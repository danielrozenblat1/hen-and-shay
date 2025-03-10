import React from 'react';
import styles from './OurServices.module.css';
import { 
  FiNavigation, 
  FiHome, 
  FiTruck, 
  FiTag, 
  FiMusic, 
  FiUsers, 
  FiUserPlus, 
  FiGlobe 
} from 'react-icons/fi';

const OurServices = () => {
  const services = [
    {
      name: "דילים ונופשים לזוגות",
      icon: <FiUsers className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על דילים ונופשים לזוגות"
    },
    {
      name: "דילים למשפחות עם ילדים",
      icon: <FiUserPlus className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על דילים למשפחות עם ילדים"
    },
    {
      name: "השכרת רכבים",
      icon: <FiTruck className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על השכרת רכבים"
    },
    {
      name: "הזמנת כרטיסים להופעות",
      icon: <FiMusic className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על הזמנת כרטיסים להופעות"
    },
    {
      name: "הזמנת כרטיסי טיסה",
      icon: <FiNavigation className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על הזמנת כרטיסי טיסה"
    },
    {
      name: "הזמנת בתי מלון",
      icon: <FiHome className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על הזמנת בתי מלון"
    },
    {
      name: "אטרקציות בחו״ל",
      icon: <FiTag className={styles.serviceIcon} />,
      whatsappMessage: "היי חן ושי, אשמח לשמוע עוד על אטרקציות בחו״ל"
    },
    {
      name: "חופשות בהתאמה אישית",
      icon: <FiGlobe className={styles.serviceIcon} />,
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