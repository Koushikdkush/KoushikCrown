/*import { PaymentFormContainer, FormContainer } from './payment-form.style'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../buttons/button-component';
import { async } from '@firebase/util';
const Payment = () => {
    const stripe = useStripe()
    const elements = useElements()

    const paymentDefault = async (e) => {
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
                </CardElement>
            </FormContainer>  </PaymentFormContainer>
    )
}
export default Payment;
*/