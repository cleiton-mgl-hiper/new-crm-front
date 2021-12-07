import { FC, createContext, useReducer, useContext, useEffect, useMemo } from "react";
import IState from "./interfaces/IState";
import IValue from "./interfaces/IValue";
import reducer from "./reducer";

const MenuContext = createContext({} as IValue);

const initialState: IState = { favorites: [], hidden: [], position: "left" };

export const MenuProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const localStorageMenuConfigKey = useMemo(() => "menu_config", []);

	useEffect(() => {
		const storageConfigJSON = localStorage.getItem(localStorageMenuConfigKey);
		if (!storageConfigJSON) return;

		const storageConfig: IState = JSON.parse(storageConfigJSON);
		dispatch({ type: "SET_MENU_CONFIG", payload: storageConfig });
	}, [localStorageMenuConfigKey]);

	useEffect(() => {
		localStorage.setItem(localStorageMenuConfigKey, JSON.stringify(state));
	}, [state, localStorageMenuConfigKey]);

	return <MenuContext.Provider value={{ state, dispatch }}>{children}</MenuContext.Provider>;
};

export const useMenu = (): IValue => {
	const value = useContext(MenuContext);
	return value;
};
