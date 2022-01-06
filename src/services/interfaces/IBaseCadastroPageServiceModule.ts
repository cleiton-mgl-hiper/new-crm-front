export default interface IBaseCadastroPageService<T> {
	get: (empresaId: number) => Promise<T[]>;
	getById: (id: number, empresaId: number) => Promise<T | null>;
	post: (marca: T, empresaId: number) => Promise<void>;
	put: (marca: T, empresaId: number) => Promise<void>;
	delete: (id: number, empresaId: number) => Promise<void>;
}
