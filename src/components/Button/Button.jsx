import "./styles.css"

function Button() {
    const isGetButton = true;

    return <button className="main-button">{isGetButton ? "Get" : "Send"}</button>
}

export default Button;
