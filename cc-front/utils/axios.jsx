// Création d'une instance axios

import axios from "axios";

const instance = axios.create({
	// baseURL: 'http://localhost:5000'
	// baseURL: 'postgres://vrafaodtyjtusb:40d49ef7d72d878db3c655b27ff91a06b0298cea19d6ab616ebc794f4288682d@ec2-54-246-185-161.eu-west-1.compute.amazonaws.com:5432/d77fsmed54pif6'
	baseURL: 'https://collector-chain.herokuapp.com'
})

export default instance