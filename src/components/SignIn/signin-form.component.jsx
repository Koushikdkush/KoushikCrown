import { useState, } from "react";
import FormInput from "../formInput/formInput.component";

import {
    signInWithGooglePopup,
    siginAuthUserEmailandPassword
} from "../../utils/firebase/firebase.utils";

import './signin.style.scss'
import Button,{BUTTON_TYPE_CLASSES} from "../buttons/button-component";


const defaultformfield = {
    email: '', password: '',
}

const SignIn = () => {

    const [formfield, setformfiels] = useState(defaultformfield)
    const { email, password } = formfield

    const reset = () => {
        setformfiels(defaultformfield)
    }

    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();

    }


    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const { user } = await siginAuthUserEmailandPassword(email, password)
            alert('Signin SuccessFulll')
            reset()
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password')
                    reset()
                    break;
                case 'auth/user-not-found':
                    alert('Invalid email')
                    reset()
                    break;
                default:
                    console.log(error)
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setformfiels({ ...formfield, [name]: value })
    }

    return (

        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>SignIn with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type='email' label='Email'
                    required
                    onChange={handleChange}
                    name='email' value={email} />
                <FormInput type='password' label='Password'
                    required
                    onChange={handleChange}
                    name='password' value={password} />

                <div className="buttons-container">
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>SignIn</Button>
                    <Button onClick={SignInWithGoogle} type='button' buttonType={BUTTON_TYPE_CLASSES.google}>
                        GOOGLE SIGIN</Button>
                </div>
            </form>
        </div>
    )

}

export default SignIn;