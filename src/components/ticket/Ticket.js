import React from 'react';
import styles from './Ticket.module.css';

const FlightCard = ({ imageUrl, title, description }) => {
  const handleButtonClick = () => {
    const phoneNumber = "+972508499883";
    const message = `היי חן ושי, אשמח לשמוע עוד על חבילת ה${title}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={imageUrl} 
          alt={title} 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <button 
          className={styles.button}
          onClick={handleButtonClick}
        >
          מעניין אותי לשמוע
        </button>
      </div>
    </div>
  );
};

export default FlightCard;