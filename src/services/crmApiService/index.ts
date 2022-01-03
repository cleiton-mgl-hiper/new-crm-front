import { getAxiosInstance } from "./config";
import ISignInParameter from "./interfaces/ISignInParameter";
import ISignInReturn from "./interfaces/ISignInReturn";

const axiosInstance = getAxiosInstance();

export const signIn = async (param: ISignInParameter): Promise<ISignInReturn> => {
	const response = await axiosInstance.post<ISignInReturn>("token/user", param);
	return response.data;
};
