import { setUserData, LOG_IN, SIGNUP, UPDATE_PROFILE, IS_OPEN_TO_CONTACT } from "../actions/user";
import instance from "../../utils/axios";

const authMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case LOG_IN: {
			const {
				user: { email, password },
			} = store.getState();
			// On utilise une instance d'axios qui est configurer avec un baseUrl me permettant de ne plus spéficier à chaque fois http://localhost:3000
			let result
			let data
			let resultErr
			try {
				result = await instance.post("/login", {
					email,
					password,
				});
				
			} catch (error) {
				console.log(error)
				resultErr = error.request.response
			}
			if(result){
				data = result.data
			}else{
				data = resultErr
			}
						
			console.log("data from post login request >>>>", data);

			// Une fois connecter, je modifie les headers de base de mon instance axios
			// Cela me permet de ne plus avoir à spéficier dans chaque requête ses headers
			instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

			// Je stock les informations reçu au login dans mon store
			store.dispatch(setUserData(data));
			// Je déclenche l'action qui va aller récupérer mes recettes favorites
			break;
		}
		case SIGNUP: {
			console.log("entrée dans middleware signUp");
			const {
				user: { nickname, email, password, passwordConfirm },
			} = store.getState();
			console.log(nickname, email, password, passwordConfirm);
			const { data } = await instance.post("/sign_up", {
				nickname,
				email,
				password,
				passwordConfirm,
			});
			console.log("data from post signUp request >>>>", data);
		}
		case UPDATE_PROFILE: {
			console.log("entrée dans middleware update profile");
			const {
				user: { nickname, name, firstname, email, password },
			} = store.getState();
			console.log(nickname, name, firstname, email, password);
			const { data } = await instance.patch("/profil", {
				nickname,
				name,
				firstname,
				email,
				password,
				newPassword,
				newPasswordConfirm,
			});
			console.log("data from update user profile request >>>>", data);
		}
		case IS_OPEN_TO_CONTACT: {
			console.log("entrée dans middleware update isOpenToContact");
			const {
				user: { isOpenToContact },
			} = store.getState();
			console.log(isOpenToContact);
			const { data } = await instance.patch("/profil", {
				isOpenToContact,
			});
			console.log("data from update isOpenToContact request >>>>", data);
		}
		default:
			next(action);
	}
};

export default authMiddleware;
