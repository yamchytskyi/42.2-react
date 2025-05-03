import "./styles.css";
import Input from "../Input/Input"
import Button from "../Button/Button"

function LoginForm() {
    return (
        <div className="login-form-wrapper">
            <p className="label">Login form</p>
            <Input name="email" type="email" placeholder="Enter your email" label="Email"/>
            <Input name="password" type="password" placeholder="Enter your password" label="Password"/>
            <Button name="login" type="submit"/>
        </div>
    )
}

export default LoginForm;