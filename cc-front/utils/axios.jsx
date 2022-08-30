// Création d'une instance axios

import axios from "axios";

// require('dotenv').config();

const instance = axios.create({
	// baseURL: 'http://localhost:5000'
	// baseURL: process.env.DATABASE_URL
	baseURL: 'postgres://vrafaodtyjtusb:40d49ef7d72d878db3c655b27ff91a06b0298cea19d6ab616ebc794f4288682d@ec2-54-246-185-161.eu-west-1.compute.amazonaws.com:5432/d77fsmed54pif6'
})

export default instance