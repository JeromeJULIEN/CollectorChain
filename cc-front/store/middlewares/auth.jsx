import { setUserData, LOG_IN, SIGNUP, UPDATE_PROFILE, IS_OPEN_TO_CONTACT, setFavorites } from "../actions/user";
import { setAuthError } from "../actions/error";
import instance from "../../utils/axios";

const authMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case LOG_IN: {
			const {
				user: { email, password },
			} = store.getState();
			// On utilise une instance d'axios qui est configurer avec un baseUrl me permettant de ne plus spéficier à chaque fois http://localhost:3000
			let result;
			let favorites;
			let data;
			let resultErr;
			try {
				result = await instance.post("/login", {
					email,
					password,
				});
			} catch (error) {
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				if (data.error) {
					store.dispatch(setAuthError(data.error));
				} else {
					store.dispatch(setAuthError(""));
					favorites = await instance.get(`/favorite/${data.id}`);
				}
			} else {
				store.dispatch(setAuthError(resultErr));
			}

			// // Une fois connecter, je modifie les headers de base de mon instance axios
			// // Cela me permet de ne plus avoir à spéficier dans chaque requête ses headers
			// instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

			// Je stock les informations user reçu au login dans mon store
			store.dispatch(setUserData(data));
			// Je stock les favoris du user reçu au login dans mon store
			store.dispatch(setFavorites(favorites.data));
			// Je fais un reset des erreurs
			break;
		}
		case SIGNUP: {
			console.log("entrée dans middleware signUp");
			const {
				user: { nickname, email, password, passwordConfirm },
			} = store.getState();
			let result;
			let data;
			let resultErr;
			try {
				result = await instance.post("/sign_up", {
					nickname,
					email,
					password,
					passwordConfirm,
				});
			} catch (error) {
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
				if (data.error) {
					store.dispatch(setAuthError(data.error));
				} else {
					store.dispatch(setAuthError(""));
				}
			} else {
				store.dispatch(setAuthError(resultErr));
			}
			break;
		}
		case UPDATE_PROFILE: {
			console.log("entrée dans middleware update profile");
			const {
				user: { nickname, name, firstname, email, password },
			} = store.getState();

			let result;
			let data;
			let resultErr;
			try {
				result = await instance.patch("/profil", {
					nickname,
					name,
					firstname,
					email,
					password,
					newPassword,
					newPasswordConfirm,
				});
			} catch (error) {
				console.log(error);
				resultErr = error.response.data.message;
			}
			if (result) {
				data = result.data;
			} else {
				store.dispatch(setAuthError(resultErr));
			}
			break;
		}
		case IS_OPEN_TO_CONTACT: {
			console.log("entrée dans middleware update isOpenToContact");
			const {
				user: { isOpenToContact },
			} = store.getState();
			console.log(isOpenToContact);

			let result;
			let data;
			let resultErr;
			try {
				result = await instance.patch("/profil", {
					isOpenToContact,
				});
			} catch (error) {
				console.log(error);
				resultErr = error.request.response;
			}
			if (result) {
				data = result.data;
			} else {
				store.dispatch(setAuthError(resultErr));
			}
			break;
		}
		default:
			next(action);
	}
};

export default authMiddleware;
