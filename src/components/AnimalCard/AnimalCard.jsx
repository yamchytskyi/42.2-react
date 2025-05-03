import "./styles.css"

function AnimalCard({name, species, imgSrc, children}) {
    return (
        <div className="animal-card-wrapper">
            <h3>{name}</h3>
            <div>{species}</div>
            <img src={imgSrc} alt={name + " image"} />
            {children}
        </div>
    )
}

export default AnimalCard;