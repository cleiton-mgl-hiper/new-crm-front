import ICrmRouteProps from "../components/CrmRoute/interfaces/IProps";
import Layout from "../components/Layout";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import TesteCadastroPage from "../pages/TesteCadastro";
import EnumMsg from "../translate/enums/EnumMsg";
import { MdDashboard, MdPersonAdd, MdAccountBox, MdMonetizationOn, MdPermPhoneMsg, MdDesignServices, MdGroupWork, MdOutlineGroupWork } from "react-icons/md";
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

	//#region FAVORITOS
	{
		path: "/dashboard",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Dashboard,
		icon: MdDashboard,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Favoritos,
	},
	//#endregion

	//#region COMERCIAL
	{
		path: "/testecadastro",
		component: TesteCadastroPage,
		layout: Layout,
		name: EnumMsg.Cadastro,
		icon: MdPersonAdd,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.Comercial,
	},
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
		path: "/subgrupos",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Subgrupos,
		icon: MdOutlineGroupWork,
		isPrivate: true,
		displayOnMenu: true,
		menuGroup: EnumMenuGroup.ProdutosServicos,
	},
	//#endregion
];

export default routes;
