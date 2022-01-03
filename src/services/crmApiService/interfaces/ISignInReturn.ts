import IUser from "../../../contexts/AuthContext/interfaces/IUser";

export default interface ISignInReturn {
	token: string;
	dados: IUser;
}
