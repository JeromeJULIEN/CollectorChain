// Création d'une instance axios
require('dotenv').config();

import axios from "axios";

const instance = axios.create({
	// baseURL: 'http://localhost:5000'
	baseURL: process.env.DATABASE_URL
})

export default instance