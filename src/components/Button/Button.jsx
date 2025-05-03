import "./styles.css"

function Button({buttonName = "Get"}) {
    return <button className="main-button">{buttonName}</button>
}

export default Button;
