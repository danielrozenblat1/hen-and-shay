
import Button from "../components/button/Button"
import styles from "./FifthScreen.module.css"

const FifthScreen = () => {
    return (
        <>
        <div className={styles.container}>
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
                <div className={styles.description}>אם יש לך זמן פנוי ואתה מעוניין בהכנסה נוספת, מוזמן ליצור איתנו קשר</div>
             <Button text="לחצו כאן ונבדוק התאמה"/>
            </div>
            </div>
        </>
    )
}

export default FifthScreen