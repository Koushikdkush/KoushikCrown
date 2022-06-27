import { useState,} from "react";
import FormInput from "../formInput/formInput.component";
import './signup.style.scss'
import Button from "../buttons/button-component";
import { createAuthUserWithEmailandPassword, CreateUserdocFromAuth } from '../../utils/firebase/firebase.utils'


const defaultformfield = {
    displayname: '', email: '', password: '', confirm_password: ''
}

const SignUp = () => {

    const [formfield, setformfiels] = useState(defaultformfield)
    const { displayname, email, password, confirm_password } = formfield
    // console.log(formfield)
    const reset = () => {
        setformfiels(defaultformfield)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirm_password) {
            alert('password mismatch')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailandPassword(email, password,);
           
            await CreateUserdocFromAuth(user, { displayname })
            alert('SignUp Successfull...')
            reset()
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {

                alert('email already exists')
            }
            else {
                alert(error)
            }

        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setformfiels({ ...formfield, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h1>Don't have account ?</h1>
            <span>SignUp with Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Name'
                    type='text' required onChange={handleChange}
                    name='displayname' value={displayname}
                />

                <FormInput type='email' label='Email' required onChange={handleChange} name='email' value={email} />

                <FormInput type='password' label='Password' required onChange={handleChange} name='password' value={password} />

                <FormInput type='password' label='Confirm-password' required onChange={handleChange} name='confirm_password'
                    value={confirm_password}
                />
                <Button buttontype='' type="submit">SignUp</Button>
            </form>
        </div>
    )

}

export default SignUp;