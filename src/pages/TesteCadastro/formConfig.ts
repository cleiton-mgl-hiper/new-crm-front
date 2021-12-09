import { IConfigField } from "../../components/formik/Form/interfaces/IConfigField";
import EnumFieldType from "../../components/formik/Form/enums/EnumFieldType";
import InputProps from "../../components/Input/interfaces/IProps";
import validator from "validator";
import EnumMsg from "../../translate/enums/EnumMsg";

export const configCadastro: IConfigField[] = [
	{
		name: "nome",
		label: EnumMsg.Nome,
		fieldType: EnumFieldType.text,
		divSize: { xs: 12, lg: 6, xl: 4 },
		editorConfig: { required: true, minLength: 2, maxLength: 100, autoFocus: true } as InputProps,
		validate: async (value: string) => {
			if (validator.isEmpty(value, { ignore_whitespace: true })) return EnumMsg.NomeEhObrigatorio;
			else {
				if (!validator.isLength(value?.trim() || "", { min: 2 })) return EnumMsg.ONomeDeveTerNoMinimoDoisCaracteres;
				if (!validator.isLength(value?.trim() || "", { max: 100 })) return EnumMsg.ONomeDeveTerNoMaximoCemCaracteres;
			}
		},
	},
	{
		name: "sobrenome",
		label: EnumMsg.Sobrenome,
		fieldType: EnumFieldType.text,
		divSize: { xs: 12, lg: 6, xl: 4 },
	},
	{
		name: "email",
		label: EnumMsg.Email,
		fieldType: EnumFieldType.email,
		divSize: { xs: 12, lg: 6, xl: 4 },
		editorConfig: { required: true } as InputProps,
		validate: async (value: string) => {
			if (validator.isEmpty(value, { ignore_whitespace: true })) return EnumMsg.EmailEhObrigatorio;
			if (!validator.isEmail(value)) return EnumMsg.EmailInvalido;
		},
	},
	{
		name: "senha",
		label: EnumMsg.Senha,
		fieldType: EnumFieldType.password,
		divSize: { xs: 12, lg: 6, xl: 4 },
		editorConfig: { required: true, minLength: 8 } as InputProps,
		validate: async (value: string) => {
			if (validator.isEmpty(value, { ignore_whitespace: true })) return EnumMsg.SenhaEhObrigatoria;
			else {
				if (!validator.isLength(value?.trim() || "", { min: 8 })) return EnumMsg.ASenhaDeveTerNoMinimoOitoCaracteres;
			}
		},
	},
	{
		name: "telefone",
		label: EnumMsg.Telefone,
		fieldType: EnumFieldType.phone,
		divSize: { xs: 12, lg: 6, xl: 4 },
	},
	{
		name: "site",
		label: EnumMsg.Site,
		fieldType: EnumFieldType.text,
		divSize: { xs: 12, lg: 6, xl: 4 },
		validate: async (value: string) => {
			if (!validator.isEmpty(value, { ignore_whitespace: true })) {
				if (!validator.isURL(value || "")) return EnumMsg.URLInvalida;
			}
		},
	},
	{
		name: "receberAnuncios",
		label: EnumMsg.ReceberAnuncios,
		fieldType: EnumFieldType.boolean,
		divSize: { xs: 6, md: 4, lg: 3 },
	},
];
