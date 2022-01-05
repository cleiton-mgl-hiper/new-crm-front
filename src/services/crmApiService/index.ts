import IMarca from "../../pages/Marcas/_cadastro/interfaces/IMarca";
import { getAxiosInstance } from "./config";
import IMarcasServiceModule from "./interfaces/IMarcasServiceModule";
import ISignInParameter from "./interfaces/ISignInParameter";
import ISignInReturn from "./interfaces/ISignInReturn";

const axiosInstance = getAxiosInstance();

export const signIn = async (param: ISignInParameter): Promise<ISignInReturn> => {
	const response = await axiosInstance.post<ISignInReturn>("token/user", param);
	return response.data;
};

export const MarcasServiceModule: IMarcasServiceModule = {
	get: async (empresaId: number) => {
		const response = await axiosInstance.get<IMarca[]>(`api/marcas?idEmpresa=${empresaId}`);
		return response.data;
	},
	getById: async (id: number, empresaId: number) => {
		const response = await axiosInstance.get<IMarca>(`api/marcas/${id}?idEmpresa=${empresaId}`);
		return response.data;
	},
	post: async (marca: IMarca) => {
		marca.codigo = +marca.codigo;
		marca.id = +marca.id;
		marca.empresaId = +marca.empresaId;

		const response = await axiosInstance.post(`api/marcas?idEmpresa=${marca.empresaId}`, marca);
		return response.data;
	},
	put: async (marca: IMarca) => {
		marca.codigo = +marca.codigo;
		marca.id = +marca.id;
		marca.empresaId = +marca.empresaId;

		const response = await axiosInstance.put(`api/marcas/${marca.id}?idEmpresa=${marca.empresaId}`, marca);
		return response.data;
	},
};
