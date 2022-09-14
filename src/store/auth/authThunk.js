import { isLoading, setUser } from "./authSlice";
import { loginWithEmailAndPassword } from "../../config/firebaseConfig";



export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        const loginResponse = await loginWithEmailAndPassword(email, password);
        const {user} = loginResponse;
        console.log(user);
        dispatch(setUser(user));
        //TODO:
        //dispatch(setUser(userData));
    };
}

