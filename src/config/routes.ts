import ICrmRouteProps from "../components/CrmRoute/interfaces/IProps";
import Layout from "../components/Layout";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import MarcasPage from "../pages/Marcas";
import EnumMsg from "../translate/enums/EnumMsg";
import { MdDashboard, MdAccountBox, MdMonetizationOn, MdPermPhoneMsg, MdDesignServices, MdGroupWork, MdOutlineGroupWork, MdSettings } from "react-icons/md";
import EnumMenuGroup from "./enums/EnumMenuGroup";

const routes: ICrmRouteProps[] = [
	//#region NÃO TEM NO MENU *********
	{
		path: "/",
		component: LoginPage,
		name: EnumMsg.Acessar,
		isPrivate: false,
		displayOnMenu: false,
	},
	//#endregion

	//#region RESUMOS
	{
		path: "/dashboard",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Dashboard,
		icon: MdDashboard,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Resumos,
	},
	//#endregion

	//#region COMERCIAL
	{
		path: "/contatos",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Contatos,
		icon: MdAccountBox,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Comercial,
	},
	{
		path: "/oportunidades",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Oportunidades,
		icon: MdMonetizationOn,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Comercial,
	},
	{
		path: "/interacoes",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Interacoes,
		icon: MdPermPhoneMsg,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Comercial,
	},
	//#endregion

	//#region PRODUTOS E SERVIÇOS
	{
		path: "/produtosservicos",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.ProdutosServicos,
		icon: MdDesignServices,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.ProdutosServicos,
	},
	{
		path: "/grupos",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Grupos,
		icon: MdGroupWork,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.ProdutosServicos,
	},
	{
		path: "/marcas",
		component: MarcasPage,
		layout: Layout,
		name: EnumMsg.Marcas,
		icon: MdOutlineGroupWork,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.ProdutosServicos,
	},
	//#endregion

	//#region CONFIGURAÇÕES

	{
		path: "/configuracao",
		layout: Layout,
		name: EnumMsg.Configuracao,
		icon: MdSettings,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Configuracoes,
		subRoutes: [
			{ name: EnumMsg.ConfiguracaoNotificacao, subPath: "notificacao", component: DashboardPage },
			{ name: EnumMsg.ConfiguracaoIntegracao, subPath: "integracao", component: DashboardPage },
		],
	},

	//#endregion
];

export default routes;
