import axios from "axios";
import { URL } from "../../../constants";

export default axios.create({
	baseURL: URL,
	headers: { "Content-Type": "application/json" },
	withCredentials: true,
});
