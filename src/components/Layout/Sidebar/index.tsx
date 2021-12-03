import { FC } from "react";
import IProps from "./interfaces/IProps";
import * as S from "./styles";
import Grid from "../../Grid";
import { MdComputer, MdSearch } from "react-icons/md";
import routes from "../../../config/routes";
import ICrmRouteProps from "../../CrmRoute/interfaces/IProps";
import EnumMenuGroup from "../../../config/enums/EnumMenuGroup";
import { useTranslate } from "../../../contexts/TranslateContext";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar: FC<IProps> = (props) => {
	const menuRoutes: ICrmRouteProps[] = routes.filter((x) => x.displayOnMenu);
	const menuGroups: EnumMenuGroup[] = menuRoutes
		.map((x) => x.menuGroup || EnumMenuGroup.Outros)
		.reduce((arr, curr) => (arr.indexOf(curr) === -1 ? [...arr, curr] : arr), [] as EnumMenuGroup[]);

	console.log(menuGroups);

	const { translate } = useTranslate();
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<S.Container>
			<S.LogoContainer>
				<Grid item>
					<S.LogoIconContainer>
						<MdComputer size="20px" color="#FFF" />
					</S.LogoIconContainer>
				</Grid>
				<Grid item>
					<S.LogoDesc>FRG CRM</S.LogoDesc>
				</Grid>
			</S.LogoContainer>

			<S.EmpresaLink>1254 - Fulltime homologação</S.EmpresaLink>

			<S.SearchContainer>
				<S.SearchField />
				<S.SearchIconContainer>
					<MdSearch size="20" />
				</S.SearchIconContainer>
			</S.SearchContainer>

			<S.NavItemsContainer>
				{menuGroups.map((group, idx) => {
					const groupRoutes = menuRoutes.filter((x) => x.menuGroup === group);

					const items = groupRoutes.map(({ icon: Icon, name, path }) => (
						<S.NavItem key={path} onClick={() => navigate(path)} active={path === location.pathname}>
							{Icon ? (
								<S.NavItemIconContainer>
									<Icon size="19" />
								</S.NavItemIconContainer>
							) : (
								<></>
							)}
							<S.NavItemText>{translate(name)}</S.NavItemText>
						</S.NavItem>
					));

					if (idx < menuGroups.length - 1) items.push(<S.NavDivider key={idx} />);

					return items;
				})}
			</S.NavItemsContainer>
		</S.Container>
	);
};

export default Sidebar;
