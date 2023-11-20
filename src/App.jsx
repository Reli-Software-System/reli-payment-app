import { Route, Routes } from "react-router-dom";
import ConfigurePayment from "./pages/ConfigurePayment";
import Success from "./pages/Success";

const App = () => {
	return (
		<Routes>
			<Route index element={<ConfigurePayment />} />
			<Route path="complete" element={<Success />} />
		</Routes>
	);
};

export default App;
