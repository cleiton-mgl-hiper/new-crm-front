import DispatchType from "./types/DispatchType";
import IState from "./interfaces/IState";

const reducer = (state: IState, action: DispatchType): IState => {
	switch (action.type) {
		case "SET_MENU_CONFIG": {
			return { ...state, ...action.payload };
		}

		case "SET_MENU_POSITION": {
			return { ...state, position: action.payload || "left" };
		}

		case "SET_MENU_FAVORITES": {
			return { ...state, favorites: action.payload || [] };
		}

		case "SET_MENU_HIDDEN": {
			return { ...state, hidden: action.payload || [] };
		}

		default:
			return state;
	}
};

export default reducer;
