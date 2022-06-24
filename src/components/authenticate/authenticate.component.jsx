
import SignUp from "../Signup/signup-form.component";
import SignIn from "../SignIn/signin-form.component";
import './authentication.style.scss'
const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn></SignIn>
            <SignUp></SignUp>

        </div>
    )
}
export default Authentication;