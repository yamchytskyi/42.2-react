import "./styles.css"

function ClientCard({name, photo, age, gender, borderStyle, color}) {
    return (
        <div className="card-wrapper" style={{backgroundColor: color, border: `2px ${borderStyle} black`}}>
            <h3>{name}</h3>
            <img src={photo} alt={name + "'s photo"} />
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}

export default ClientCard;