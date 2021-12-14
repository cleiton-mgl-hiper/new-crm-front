import { FC, createContext, useReducer, useContext, useEffect } from "react";
import IState from "./interfaces/IState";
import IValue from "./interfaces/IValue";
import reducer from "./reducer";

const menuStorageKey: string = "menu_config";
const storageConfig = JSON.parse(localStorage.getItem(menuStorageKey) || "null") as IState | null;

const MenuContext = createContext({} as IValue);

const initialState: IState = storageConfig || { open: true, favorites: [], hidden: [], position: "left" };
export const MenuProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem(menuStorageKey, JSON.stringify(state));
	}, [state]);

	return <MenuContext.Provider value={{ state, dispatch }}>{children}</MenuContext.Provider>;
};

export const useMenu = (): IValue => {
	const value = useContext(MenuContext);
	return value;
};
