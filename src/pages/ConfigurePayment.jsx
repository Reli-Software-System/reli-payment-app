import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SetupForm from "../features/setupForm/SetupForm";
const stripePromise = loadStripe(
	"pk_test_51MHrgZRn8LsdtSkwXauDYzuUgkmRxy6B36BGO7kF7ZS1X55a5h2EzFT9kmbaMIZtZKr7jiQFqP51z2CvsCEBfV4600ljXKrAT3"
);

const options = {
	mode: "setup",
	currency: "usd",
};

const ConfigurePayment = () => {
	return (
		<div className="container">
			<Elements stripe={stripePromise} options={options}>
				<SetupForm />
			</Elements>
		</div>
	);
};

export default ConfigurePayment;
