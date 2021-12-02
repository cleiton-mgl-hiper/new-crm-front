import ICrmRouteProps from "../components/CrmRoute/interfaces/IProps";
import Layout from "../components/Layout";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import TesteCadastroPage from "../pages/TesteCadastro";
import EnumMsg from "../translate/enums/EnumMsg";
import { MdDashboard, MdPersonAdd } from "react-icons/md";

const routes: ICrmRouteProps[] = [
	{
		path: "/",
		component: LoginPage,
		name: EnumMsg.Acessar,
		isPrivate: false,
	},
	{
		path: "/dashboard",
		component: DashboardPage,
		layout: Layout,
		name: EnumMsg.Dashboard,
		icon: MdDashboard,
		isPrivate: true,
	},
	{
		path: "/testecadastro",
		component: TesteCadastroPage,
		layout: Layout,
		name: EnumMsg.Cadastro,
		icon: MdPersonAdd,
		isPrivate: false,
	},
];

export default routes;
