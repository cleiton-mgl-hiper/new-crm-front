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
	[EnumMsg.Pesquisar]: {
		enUS: "Search",
		es: "Buscar",
		ptBR: "Pesquisar",
	},
	[EnumMsg.Contatos]: {
		enUS: "Contacts",
		es: "Contactos",
		ptBR: "Contatos",
	},
	[EnumMsg.Oportunidades]: {
		enUS: "Opportunities",
		es: "Oportunidades",
		ptBR: "Oportunidades",
	},
	[EnumMsg.Interacoes]: {
		enUS: "Interactions",
		es: "Interacciones",
		ptBR: "Interações",
	},
	[EnumMsg.Grupos]: {
		enUS: "Groups",
		es: "Grupos",
		ptBR: "Grupos",
	},
	[EnumMsg.Subgrupos]: {
		enUS: "Subgroups",
		es: "Subgrupos",
		ptBR: "Subgrupos",
	},
	[EnumMsg.ProdutosServicos]: {
		enUS: "Products and services",
		es: "Productos y servicios",
		ptBR: "Produtos e serviços",
	},
	[EnumMsg.Favorito]: {
		enUS: "Favorite",
		es: "Favorito",
		ptBR: "Favorito",
	},
	[EnumMsg.Ocultar]: {
		enUS: "Hide",
		es: "Esconder",
		ptBR: "Ocultar",
	},
	[EnumMsg.Padrao]: {
		enUS: "Default",
		es: "Predeterminado",
		ptBR: "Padrão",
	},
	[EnumMsg.Configuracao]: {
		enUS: "Settings",
		es: "Ajustes",
		ptBR: "Configuração",
	},
	[EnumMsg.ConfiguracaoNotificacao]: {
		enUS: "Notification settings",
		es: "Configuración de notificación",
		ptBR: "Configuração de notificação",
	},
	[EnumMsg.ConfiguracaoIntegracao]: {
		enUS: "Integration settings",
		es: "Configuración de integración",
		ptBR: "Configuração de integração",
	},
	[EnumMsg.MoverParaCima]: {
		enUS: "Move up",
		es: "Muévete a la arriba",
		ptBR: "Mover para cima",
	},
	[EnumMsg.MoverParaBaixo]: {
		enUS: "Move down",
		es: "Muévete a la abajo",
		ptBR: "Mover para baixo",
	},
	[EnumMsg.MoverParaEsquerda]: {
		enUS: "Move left",
		es: "Muévete a la Izquierda",
		ptBR: "Mover para esquerda",
	},
	[EnumMsg.MoverParaDireita]: {
		enUS: "Move right",
		es: "Muévete a la derecha",
		ptBR: "Mover para direita",
	},
	[EnumMsg.Marcas]: {
		enUS: "Brands",
		es: "Marcas",
		ptBR: "Marcas",
	},
	[EnumMsg.Codigo]: {
		enUS: "Code",
		es: "Código",
		ptBR: "Código",
	},
	[EnumMsg.CodigoInvalido]: {
		enUS: "Invalid code",
		es: "Código invalido",
		ptBR: "Código inválido",
	},
	[EnumMsg.Descricao]: {
		enUS: "Description",
		es: "Descripción",
		ptBR: "Descrição",
	},
	[EnumMsg.DescricaoEhObrigatorio]: {
		enUS: "Description is required",
		es: "Se requiere la Descripción",
		ptBR: "Desrição é obrigatória",
	},
	[EnumMsg.ADescricaoDeveTerNoMinimoDoisCaracteres]: {
		enUS: "The description must be at least 2 characters long",
		es: "La descripción debe tener al menos 2 caracteres",
		ptBR: "A descrição deve ter no mínimo 2 caracteres",
	},
	[EnumMsg.ADescricaoDeveTerNoMaximoCemCaracteres]: {
		enUS: "The description must have a maximum of 100 characters",
		es: "La descripción debe tener un máximo de 100 caracteres",
		ptBR: "A descrição deve ter no máximo 100 caracteres",
	},
	[EnumMsg.ErroInesperado]: {
		enUS: "Unexpected error",
		es: "Error inesperado",
		ptBR: "Erro inesperado",
	},
	[EnumMsg.Adicionar]: {
		enUS: "Add",
		es: "Agregar",
		ptBR: "Adicionar",
	},
	[EnumMsg.Voltar]: {
		enUS: "Return",
		es: "Regreso",
		ptBR: "Voltar",
	},
	[EnumMsg.Cancelar]: {
		enUS: "Cancel",
		es: "Cancelar",
		ptBR: "Cancelar",
	},
	[EnumMsg.Confirmacao]: {
		enUS: "Confirmation",
		es: "Confirmación",
		ptBR: "Confirmação",
	},
	[EnumMsg.ORegistroSeraExcluidoPermanentemente]: {
		enUS: "The record will be permanently deleted",
		es: "El registro se eliminará de forma permanente",
		ptBR: "O registro será excluído permanentemente",
	},
	[EnumMsg.OrigemProspect]: {
		enUS: "Prospect origin",
		es: "Origen prospect",
		ptBR: "Origem prospect",
	},
	[EnumMsg.Regiao]: {
		enUS: "Region",
		es: "Região",
		ptBR: "Região",
	},
};

export default Messages;
