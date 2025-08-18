import Button from "../components/button/Button"
import styles from "./FifthScreen.module.css"

const FifthScreen = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>לקהילת הווצאפ שלנו</div>
                <div className={styles.description}>טיפים חינמים,דילים חמים וקהילה תומכת</div>
                <a 
                    href="https://chat.whatsapp.com/Fu6ai0GnTUSF5YPtpmEIJc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.button}
                >
                 לחצו כאן
                </a>
                <div className={styles.title}>רוצים לנסות להזמין בעצמכם?</div>
                <div className={styles.description}>לחצו על הלינק הבא ותוכלו להזמין מלונות וטיסות באופן עצמאי</div>
                <a 
                    href="https://www.travelor.com/he?fid=79282" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.button}
                >
                    הזמינו עכשיו
                </a>
                
                <div className={styles.agentSection}>
                    <div className={styles.title}>מעוניינ/ת בהכנסה נוספת כסוכנ/ת נסיעות?</div>
                    
                    <div className={styles.checklistContainer}>
                        <div className={styles.checklistItem}>
                            <div className={styles.checkmark}>✓</div>
                            <div className={styles.itemText}>הדרכה מקיפה וליווי אישי</div>
                        </div>
                        <div className={styles.checklistItem}>
                            <div className={styles.checkmark}>✓</div>
                            <div className={styles.itemText}>ללא צורך בניסיון קודם</div>
                        </div>
                        <div className={styles.checklistItem}>
                            <div className={styles.checkmark}>✓</div>
                            <div className={styles.itemText}>עבודה מקוונת גמישה</div>
                        </div>
                        <div className={styles.checklistItem}>
                            <div className={styles.checkmark}>✓</div>
                            <div className={styles.itemText}>הכנסה נאה וקבועה</div>
                        </div>
                    </div>
                    
                    <a 
                        href="https://affiliateor.com/he/il/lead/?ref=79282" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.button}
                    >
                        לחצו כאן ונבדוק התאמה
                    </a>
                </div>
            </div>
        </>
    )
}

export default FifthScreen