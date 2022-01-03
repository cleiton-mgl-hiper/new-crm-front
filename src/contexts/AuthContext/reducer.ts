import DispatchType from "./types/DispatchType";
import IState from "./interfaces/IState";

const reducer = (state: IState, action: DispatchType): IState => {
	switch (action.type) {
		case "SIGN_IN":
			return { ...state, token: action.payload.token, user: action.payload.user };

		case "SIGN_OUT":
			return { ...state, token: null };

		default:
			return state;
	}
};

export default reducer;
