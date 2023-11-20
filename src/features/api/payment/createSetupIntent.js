import axios from "../axios";

const createSetupIntent = async (body) => {
	try {
		const response = await axios.post("/payments/setup-intent", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createSetupIntent;
