import { FC, createContext, useReducer, useContext, useEffect, useMemo } from "react";
import LangType from "../../translate/types/LangType";
import IState from "./interfaces/IState";
import IValue from "./interfaces/IValue";
import reducer from "./reducer";
import EnumMsg from "../../translate/enums/EnumMsg";
import Messages from "../../translate/Messages";

const TranslateContext = createContext({} as IValue);

const navigatorLang = window.navigator?.language;
const defaultLang = (navigatorLang?.replace("-", "") || "ptBR") as LangType;
const initialState: IState = { lang: defaultLang || "ptBR" };

export const TranslateProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const localStorageLangKey = useMemo(() => "lang", []);

	useEffect(() => {
		const storageLang = localStorage.getItem(localStorageLangKey) as LangType;
		if (storageLang) dispatch({ type: "SET_LANG", payload: storageLang });
	}, [localStorageLangKey]);

	useEffect(() => {
		localStorage.setItem(localStorageLangKey, state.lang);
	}, [state.lang, localStorageLangKey]);

	const translate = (key: EnumMsg): string => {
		const { lang } = state;

		let msg = Messages[key];
		if (!msg) return "MENSAGEM NÃO CADASTRADA";

		let translateValue = msg[lang];
		if (!translateValue) return "MENSAGEM NÃO TRADUZIDA";

		return translateValue;
	};

	return <TranslateContext.Provider value={{ state, dispatch, translate }}>{children}</TranslateContext.Provider>;
};

export const useTranslate = (): IValue => {
	const value = useContext(TranslateContext);
	return value;
};
