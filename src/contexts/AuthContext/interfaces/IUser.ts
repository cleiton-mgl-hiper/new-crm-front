import IEmpresaAcesso from "./IEmpresaAcesso";

export default interface IUser {
	id: number;
	nome: string;
	email: string;
	empresasAcesso: IEmpresaAcesso[];
	empresaAtiva: number;
	roles: string[];
}
