import IUser from "../interfaces/IUser";

interface IDispatch_SIGN_IN {
	type: "SIGN_IN";
	payload: { token: string; user: IUser };
}

interface IDispatch_SIGN_OUT {
	type: "SIGN_OUT";
}

interface IDispatch_SET_EMPRESA_ATIVA {
	type: "SET_EMPRESA_ATIVA";
	payload: number;
}

type DispatchType = IDispatch_SIGN_IN | IDispatch_SIGN_OUT | IDispatch_SET_EMPRESA_ATIVA;

export default DispatchType;
