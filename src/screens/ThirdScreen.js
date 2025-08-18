import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

import styles from "./ThirdScreen.module.css";
import { Plane, Map, Globe, Headphones, Shield, Clock, HelpCircle, Navigation, Hotel } from 'lucide-react';


const TravelScreen = () => {
    const [index, setIndex] = useState(0);
    
    const INTRO_TEXTS = [
        "מתכננים טיול לחו\"ל?",
        "רוצים חופשה מושלמת?",
        "חוששים מתקלות בדרך?"
    ];

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex(index => index + 1),
            3000 // Change every 3 seconds
        );
        return () => clearInterval(intervalId);
    }, []);

    return <>
        <div className={styles.container}>
            <div className={styles.introSection}>
                <div className={styles.introBox}>
                    <TextTransition springConfig={presets.wobbly} inline>
                        <span>{INTRO_TEXTS[index % INTRO_TEXTS.length]}</span>
                    </TextTransition>
                </div>
            </div>
            
            <div className={styles.description}>
                אנחנו מבינים בדיוק את החששות שלכם...
            </div>

            <div className={styles.concernsContainer}>
                <div className={styles.concernItem}>
                    <Map className={styles.icon} />
                    <span>חוששים מקשיי שפה במדינה זרה?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Map className={styles.icon} />
                    <span>לא בטוחים איך להתמצא במקום חדש?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Hotel className={styles.icon} />
                    <span>מודאגים שהמלון יהיה רחוק מהאטרקציות?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Navigation className={styles.icon} />
                    <span>מתקשים לתכנן מסלול אופטימלי?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <HelpCircle className={styles.icon} />
                    <span>חוששים מבעיות בלתי צפויות בחו\"ל?</span>
                </div>
            </div>

            <div className={styles.notAlone}>
                אתם לא לבד!
            </div>

            <div className={styles.description}>
                כסוכנות נסיעות מנוסה שליוותה מאות מטיילים, אנחנו יודעים ש-30% מהמטיילים
                חווים תקלות במהלך הטיול. לכן חשוב שיהיה לכם גב מקצועי ומנוסה.
            </div>

            <div className={styles.goodNews}>
                אבל.. יש פתרון!
            </div>

            <div className={styles.title}>אנחנו כאן בשבילכם</div>
{/* יתרונות */}
        
        </div>
        <div className={styles.title}>בואו נתכנן יחד את החופשה המושלמת</div>

    </>
};

export default TravelScreen;