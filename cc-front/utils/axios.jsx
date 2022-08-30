// Création d'une instance axios

import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
	baseURL: "http://localhost:5000",
});
=======
	// baseURL: 'http://localhost:5000'
	baseURL: 'https://collector-chain.herokuapp.com'
})
>>>>>>> f8cd71493ec15145520e4cb3e0da764c543234f0

export default instance;
