import EnumMsg from "./enums/EnumMsg";
import IMessageValue from "./interfaces/IMessageValue";

const Messages: { [k in EnumMsg]: IMessageValue } = {
	[EnumMsg.AcesseParaContinuar]: {
		enUS: "Login to continue",
		es: "Iniciar sesión para continuar",
		ptBR: "Acesse para continuar",
	},
	[EnumMsg.Usuario]: {
		enUS: "User",
		es: "Usuario",
		ptBR: "Usuário",
	},
	[EnumMsg.Senha]: {
		enUS: "Password",
		es: "Contraseña",
		ptBR: "Senha",
	},
	[EnumMsg.Acessar]: {
		enUS: "Access",
		es: "Acceso",
		ptBR: "Acessar",
	},
	[EnumMsg.LembrarDeMim]: {
		enUS: "Remember me",
		es: "Acordarse de mi",
		ptBR: "Lembrar de mim",
	},
	[EnumMsg.EsqueceuSuaSenha]: {
		enUS: "Forgot your password?",
		es: "¿Olvidaste tu contraseña?",
		ptBR: "Esqueceu sua senha?",
	},
	[EnumMsg.TermosDeUsoPoliticaDePrivacidade]: {
		enUS: "TERMS OF USE - PRIVACY POLICY",
		es: "TÉRMINOS DE USO - POLÍTICA DE PRIVACIDAD",
		ptBR: "TERMOS DE USO - POLÍTICA DE PRIVACIDADE",
	},
	[EnumMsg.DescricaoDoSistema]: {
		enUS: "Effectively manage leads, get more assertive sales forecasts and close more deals with the fastest growing sales platform in the market!",
		es: "¡Administre clientes potenciales de manera efectiva, obtenga pronósticos de ventas más asertivos y cierre más acuerdos con la plataforma de ventas de más rápido crecimiento en el mercado!",
		ptBR: "Gerencie leads de forma eficaz, obtenha previsões mais assertivas de vendas e feche mais negócios com a plataforma de vendas que mais cresce no mercado!",
	},
	[EnumMsg.Cadastro]: {
		enUS: "Register",
		es: "Registro",
		ptBR: "Cadastro",
	},
	[EnumMsg.Sucesso]: {
		enUS: "Success",
		es: "Éxito",
		ptBR: "Sucesso",
	},
	[EnumMsg.Nome]: {
		enUS: "Name",
		es: "Nombre",
		ptBR: "Nome",
	},
	[EnumMsg.Sobrenome]: {
		enUS: "Surname",
		es: "Apellido",
		ptBR: "Sobrenome",
	},
	[EnumMsg.Email]: {
		enUS: "Email",
		es: "Email",
		ptBR: "Email",
	},
	[EnumMsg.Telefone]: {
		enUS: "Phone",
		es: "Teléfono",
		ptBR: "Telefone",
	},
	[EnumMsg.Site]: {
		enUS: "Site",
		es: "Sitio",
		ptBR: "Site",
	},
	[EnumMsg.ReceberAnuncios]: {
		enUS: "Receive ads",
		es: "Recibir anuncios",
		ptBR: "Receber anúncios",
	},
	[EnumMsg.NomeEhObrigatorio]: {
		enUS: "Name is required",
		es: "Se requiere el nombre",
		ptBR: "Nome é obrigatório",
	},
	[EnumMsg.ONomeDeveTerNoMinimoDoisCaracteres]: {
		enUS: "The name must be at least 2 characters long",
		es: "El nombre debe tener al menos 2 caracteres",
		ptBR: "O nome deve ter no mínimo 2 caracteres",
	},
	[EnumMsg.ONomeDeveTerNoMaximoCemCaracteres]: {
		enUS: "The name must have a maximum of 100 characters",
		es: "El nombre debe tener un máximo de 100 caracteres",
		ptBR: "O nome deve ter no máximo 100 caracteres",
	},
	[EnumMsg.EmailEhObrigatorio]: {
		enUS: "Email is required",
		es: "Se requiere el email",
		ptBR: "Email é obrigatório",
	},
	[EnumMsg.EmailInvalido]: {
		enUS: "Invalid email",
		es: "Email invalido",
		ptBR: "Email inválido",
	},
	[EnumMsg.SenhaEhObrigatoria]: {
		enUS: "Password is required",
		es: "Se requiere contraseña",
		ptBR: "Senha é obrigatória",
	},
	[EnumMsg.ASenhaDeveTerNoMinimoOitoCaracteres]: {
		enUS: "The password must be at least 8 characters long",
		es: "Contraseña debe tener al menos 8 caracteres",
		ptBR: "A senha deve ter no mínimo 8 caracteres",
	},
	[EnumMsg.URLInvalida]: {
		enUS: "Invalid URL",
		es: "URL invalida",
		ptBR: "URL inválida",
	},
	[EnumMsg.Confirmar]: {
		enUS: "Confirm",
		es: "Confirmar",
		ptBR: "Confirmar",
	},
	[EnumMsg.Dashboard]: {
		enUS: "Dashboard",
		es: "Dashboard",
		ptBR: "Dashboard",
	},
};

export default Messages;
