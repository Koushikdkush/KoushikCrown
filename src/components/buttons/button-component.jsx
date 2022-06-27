import { BaseButton, GoogleSigInButton, InvertedButton } from "./button.style";


 export const BUTTON_TYPE_CLASSES = {
    base: 'base', google: 'google-sign-in', inverted: 'inverted'
};

const getButton =(buttontype=BUTTON_TYPE_CLASSES.base)=>(
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSigInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttontype]
)

const Button = ({ children, buttontype, ...ontherprops }) => {
    const CustomButton = getButton(buttontype)
    return <CustomButton {...ontherprops}></CustomButton>
    
}

export default Button;