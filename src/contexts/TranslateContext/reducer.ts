import EnumActionType from "./enums/EnumActionType";
import IDispatch from "./interfaces/IDispatch";
import IState from "./interfaces/IState";

const reducer = (state: IState, action: IDispatch): IState => {
	switch (action.type) {
		case EnumActionType.SET_LANG:
			localStorage.setItem("lang", action.payload);
			return { ...state, lang: action.payload };
		default:
			return state;
	}
};

export default reducer;
