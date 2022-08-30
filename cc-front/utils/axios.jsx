// Création d'une instance axios

import axios from "axios";

const instance = axios.create({
	// baseURL: 'http://localhost:5000'
	baseURL: "https://collector-chain.herokuapp.com/api",
});

export default instance;
