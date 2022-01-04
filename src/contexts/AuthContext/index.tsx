import { FC, createContext, useReducer, useContext, useEffect } from "react";
import IUser from "./interfaces/IUser";
import IState from "./interfaces/IState";
import IValue from "./interfaces/IValue";
import reducer from "./reducer";

export const tokenStorageKey: string = "crm-api-token";
const storageToken = localStorage.getItem(tokenStorageKey) as string | null;

const userStorageKey: string = "crm-api-user";
const storageUser = JSON.parse(localStorage.getItem(userStorageKey) || "null") as IUser | null;

const AuthContext = createContext({} as IValue);

const initialState: IState = { user: storageUser, token: storageToken };
export const AuthProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (state.token && state.user) {
			localStorage.setItem(userStorageKey, JSON.stringify(state.user));
			localStorage.setItem(tokenStorageKey, state.token);
		} else {
			localStorage.removeItem(tokenStorageKey);
			localStorage.removeItem(userStorageKey);
		}
	}, [state.user, state.token]);

	return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IValue => {
	const value = useContext(AuthContext);
	return value;
};
