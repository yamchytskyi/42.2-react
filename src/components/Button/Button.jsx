import "./styles.css"

function Button({name = "Get", type = "button"}) {
    return <button className="main-button" type={type}>{name}</button>
}

export default Button;
