import Button from "../Button/Button"
import "./styles.css"
import {lessonData, technologies} from "./data"

function LessonCard() {
    return (
        <div className="lesson-card">
            <h3>Lesson {lessonData.lesson_number}</h3>
            <p>Teacher {lessonData.teacher}</p>
            <ul>
            <p>Technologies</p>
            {technologies.map((tech, index) => (<li key={index}>
                {tech.url ? (
                    <a href={tech.url} target="_blank" rel={tech.rel ? tech.rel : ""}>{tech.name}</a>
                    ) : (
                        tech.name
                        )}
                </li>)
            )}
            </ul>
            <Button />
        </div>
    )
}

export default LessonCard;