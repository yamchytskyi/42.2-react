import "./styles.css";

function Input({name, type = "text", placeholder = "Enter your email", label = "Email"}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;