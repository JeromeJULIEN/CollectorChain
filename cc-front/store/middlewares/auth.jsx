import { setUserData, SIGN_IN } from '../actions/user';
import axios from 'axios';

const authMiddleware = (store) => (next) => async (action) => { 
	switch (action.type) { 
		case SIGN_IN: {
            console.log('entrée dans middleware auth > action signin')
			// const { user: { email, password } } = store.getState();
			// Équivalent
			// const { user } = store.getState();
			// const { email, password } = user;
			// On utilise une instance d'axios qui est configurer avec un baseUrl me permettant de ne plus spéficier à chaque fois http://localhost:3001
			// const { data } = await axios.post('/login', {
			// 	email,
			// 	password, 
			// });

			// Une fois connecter, je modifie les headers de base de mon instance axios
			// Cela me permet de ne plus avoir à spéficier dans chaque requête ses headers
			// axios.defaults.headers.common.Authorization = `Bearer ${ data.token }`;

			// Je stock les informations reçu au login dans mon store
			// store.dispatch(setUserData(data));
			// Je déclenche l'action qui va aller récupérer mes recettes favorites
			break;
		}
		default: 
			next(action); 
	} 
}; 

export default authMiddleware;