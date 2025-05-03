import "./styles.css"
import Button from "../../components/Button/Button"
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {dog, parrot, animals} from "./data.js"

function Lesson03 () {
    return (
        <div className="lesson03-wrapper">
            <Button buttonName="Send"/>
            <Button buttonName="Delete"/>
            <Button />
            <AnimalCard name={dog.name} species={dog.species} imgSrc={dog.imageSrc}/>
            <AnimalCard name={parrot.name} species={parrot.species} imgSrc={parrot.imageSrc}><p>{parrot.role}</p></AnimalCard>
            {animals.map((animal, index) => (<AnimalCard key={index} name={animal.name} species={animal.species} imgSrc={animal.imageSrc}/>))}
        </div>
    )
}

export default Lesson03;