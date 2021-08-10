import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./payment.css"
import Button from '@material-ui/core/Button';
// import { loadStripe } from '@stripe/stripe-js';
import { Link } from "react-router-dom";
export default function CheckoutForm() {
  // const stripe = loadStripe('pk_test_L1f0e3XAzjsG7jtp4uN7L9ql');
  const stripe = useStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const changeelement = (event) => {
      var element = document.getElementById('displayDiv');
      element.innerHTML = event
    }
    const cardElement = elements.getElement(CardElement);
    console.log("cardElement", cardElement);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: 'User name',
      },
    });

    if (error) {
      changeelement(error.code)
      console.log('[error]', error.code);
    } else {
      changeelement(`Thank you for your ${paymentMethod.card.brand} Donation`)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };



  return (

    <form className="larger" onSubmit={handleSubmit}>
      <div className="signupContainer borderbox">
        <div id="displayDiv"></div>
        <label className="larger1">Make a Payment</label>

        <CardElement

          options={{
            style: {
              base: {
                color: '#303238',
                fontSize: '36px',
                fontFamily: 'Roboto, sans-serif',
                fontSmoothing: 'antialiased',
                '::placeholder': {
                  color: '#CFD7DF',
                },
              },
              invalid: {
                color: '#e5424d',
                ':focus': {
                  color: '#303238',
                },
              },
            }
          }
          }
        />
        <div className="flex spaceAround">
          <Button variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" className='buttonStart' type="submit" disabled={!stripe}>
            PAY NOW
          </Button>
          <Link style={{ paddingBottom: "10px", fontWeight: '500', fontFamily: "Roboto", fontSize: '0.875rem', padding: " 6.5px 20px" }} className="button margin-5 col" to="/dashboard">BACK </Link>
        </div>

      </div>

    </form >
  );
};