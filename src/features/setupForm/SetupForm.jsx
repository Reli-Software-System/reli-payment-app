import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import createSetupIntent from "../api/payment/createSetupIntent";

const SetupForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const [loading, setLoading] = useState(false);

	const handleError = (error) => {
		setLoading(false);
		alert(error.message);
	};

	const handleSubmit = async (e) => {
		// we don't want to let default form submission here
		e.preventDefault();

		if (!stripe) {
			// Strip.js hasn't loaded yet
			return;
		}

		setLoading(true);

		// trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}

		// create the setup intent
		const response = await createSetupIntent({
			customerId: "cus_P2Qwt6leDT1qnb",
		});
		console.log(response.data);

		const { client_secret: clientSecret } = response.data;

		// confirm the SetupIntent using the details collected by the Payment Element
		const { error } = await stripe.confirmSetup({
			elements,
			clientSecret,
			confirmParams: {
				return_url: "http://localhost:5000/complete",
			},
		});

		if (error) {
			handleError(error);
		} else {
			console.log("success");
			// redirect customer to "return_url"
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			<button type="submit" disabled={!stripe || loading}>
				Submit
			</button>
		</form>
	);
};

export default SetupForm;
