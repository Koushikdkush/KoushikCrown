import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.style'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from "../buttons/button-component";
import { async } from '@firebase/util';
import { useState } from 'react';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux';
const Payment = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true)
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => res.json());

        const {
            paymentIntent: { client_secret },
        } = response
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'guest'
                }
            }
        })

        setIsProcessingPayment(false)


        if (paymentResult.error) {

            console.log(paymentResult.error)
        }
        else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Success')
            }
        }
    }

    return (
        <PaymentFormContainer onSubmit={paymentHandler}>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement />

                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
                    Pay Now</PaymentButton>
            </FormContainer>  </PaymentFormContainer>
    )
}
export default Payment;
