import IMarca from "../../pages/Marcas/interfaces/IMarca";
import IOrigemProspect from "../../pages/OrigemProspect/interfaces/IOrigemProspect";
import { getAxiosInstance } from "./config";
import IMarcasServiceModule from "./interfaces/IMarcasServiceModule";
import IOrigemProspectServiceModule from "./interfaces/IOrigemProspectServiceModule";
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
	post: async (marca: IMarca, empresaId: number) => {
		marca.id = 0;
		marca.codigo = +marca.codigo;
		marca.empresaId = +empresaId;

		const response = await axiosInstance.post(`api/marcas?idEmpresa=${empresaId}`, marca);
		return response.data;
	},
	put: async (marca: IMarca, empresaId: number) => {
		marca.id = +marca.id || 0;
		marca.codigo = +marca.codigo;
		marca.empresaId = +empresaId;

		const response = await axiosInstance.put(`api/marcas/${marca.id}?idEmpresa=${empresaId}`, marca);
		return response.data;
	},
	delete: async (id: number, empresaId: number) => {
		await axiosInstance.delete(`api/marcas/${id}?idEmpresa=${empresaId}`);
	},
};

export const OrigemProspectServiceModule: IOrigemProspectServiceModule = {
	get: async (empresaId: number) => {
		const response = await axiosInstance.get<IOrigemProspect[]>(`api/origemprospect?idEmpresa=${empresaId}`);
		return response.data;
	},
	getById: async (id: number, empresaId: number) => {
		const response = await axiosInstance.get<IOrigemProspect>(`api/origemprospect/${id}?idEmpresa=${empresaId}`);
		return response.data;
	},
	post: async (origem: IOrigemProspect, empresaId: number) => {
		origem.id = 0;
		origem.empresaId = +empresaId;

		const response = await axiosInstance.post(`api/origemprospect?idEmpresa=${empresaId}`, origem);
		return response.data;
	},
	put: async (origem: IOrigemProspect, empresaId: number) => {
		origem.id = +origem.id || 0;
		origem.empresaId = +empresaId;

		const response = await axiosInstance.put(`api/origemprospect/${origem.id}?idEmpresa=${empresaId}`, origem);
		return response.data;
	},
	delete: async (id: number, empresaId: number) => {
		await axiosInstance.delete(`api/origemprospect/${id}?idEmpresa=${empresaId}`);
	},
};
