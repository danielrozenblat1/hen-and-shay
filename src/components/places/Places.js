import React from 'react';
import styles from './Places.module.css';
import Button from '../button/Button';
import dubai from "../../images/דובאי.jpg";
import atuna from "../../images/אתונה.jpg";
import samui from "../../images/קו סמוי.jpg";

const Places = () => {
  const destinations = [
    {
      id: "01",
      name: "דובאי",
      image: dubai
    },
    {
      id: "02",
      name: "אתונה",
      image: atuna
    },
    {
      id: "03",
      name: "קו סמוי",
      image: samui
    }
  ];

  return (
    <div className={styles.placesContainer}>
      <h2 className={styles.title}>
        <span className={styles.mainTitle}>היעדים החמים שלנו:</span>
      </h2>
      
      <div className={styles.destinationsWrapper}>
        {destinations.map((destination) => (
          <div key={destination.id} className={styles.destinationCard}>
            <div className={styles.numberBadge}>
              <span className={styles.numberText}>{destination.id}</span>
            </div>
            <div className={styles.imageContainer}>
              <img 
                src={destination.image} 
                alt={destination.name}
                className={styles.destinationImage} 
              />
              <div className={styles.overlay}>
                <h3 className={styles.destinationName}>{destination.name}</h3>
              </div>
            </div>
      
          </div>
        ))}
      </div>
      <Button text="אני רוצה פרטים על אחד היעדים"/>
    </div>
  );
};

export default Places;