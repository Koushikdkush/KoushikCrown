import './button.style.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttontype, ...ontherprops }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`} {...ontherprops}>
            {children}</button>
    )
}
export default Button;