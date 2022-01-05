import IMarca from "../../../pages/Marcas/_cadastro/interfaces/IMarca";

export default interface IMarcasServiceModule {
	get: (empresaId: number) => Promise<IMarca[]>;
	getById: (id: number, empresaId: number) => Promise<IMarca | null>;
	post: (marca: IMarca) => Promise<void>;
	put: (marca: IMarca) => Promise<void>;
}
