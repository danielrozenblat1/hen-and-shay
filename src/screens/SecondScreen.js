import FlightCard from "../components/ticket/Ticket"
import styles from "./SecondScreen.module.css"
import background from "../images/רקע 2.jpg"
import vip from "../images/חופשת vip.jpg"
import family from "../images/משפחות.jpg"

const SecondScreen = () => {
    return (
        <>
            <div className={styles.row} id="התחלנו">
                <FlightCard
                    imageUrl={vip}
                    title="אולטימייט אסקייפ"
                    description="טיסה + מלון + ארוחות + כרטיסים להופעות. חוויה מושלמת לאלו שלא מתפשרים - מלונות יוקרה, מסעדות מובחרות וכרטיסים להופעות החמות ביותר. כל הפרטים סגורים מראש כדי שתתמקדו רק בליהנות ולחוות ברמה הגבוהה ביותר."
                />
                <FlightCard
                    imageUrl={family}
                    title="רוד טריפ דלוקס"
                    description="טיסה + מלון + ארוחות + השכרת רכב. הרפתקה משולבת עם פינוק מקסימלי - טיסות ישירות, מלונות מפנקים, ארוחות גורמה ורכב צמוד לחקור בקצב שלכם. החופש המושלם לכבוש את היעד בדרככם הייחודית."
                />
                <FlightCard
                    imageUrl={background}
                    title="פרידום פלוס"
                    description="טיסה + מלון. החופש להתאים את החופשה המושלמת שלכם - טיסה ומלון במחיר שלא יחזור, עם גמישות מלאה להוסיף חוויות לפי טעמכם. הבסיס המושלם למטיילים שיודעים בדיוק מה הם רוצים ואיך להפיק את המקסימום מהתקציב."
                />
            </div>
        </>
    )
}

export default SecondScreen