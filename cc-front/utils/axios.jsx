// Création d'une instance axios

import axios from "axios";

const instance = axios.create({
	// baseURL: 'http://localhost:5000'
	baseURL: 'https://collector-chain.herokuapp.com'
})

export default instance