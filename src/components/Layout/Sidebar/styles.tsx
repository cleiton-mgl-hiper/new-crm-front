import styled from "styled-components";
import EnumMsg from "../../../translate/enums/EnumMsg";
import Grid from "../../Grid";
import Input from "../../Input";
import INavItemProps from "./interfaces/INavItemProps";

export const Container = styled.nav`
	height: 100%;
	width: 270px;
	background-color: ${(props) => props.theme.palette.background.paper};
	box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	padding: 20px 10px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: stretch;
`;

export const LogoContainer = styled(Grid).attrs({
	spacing: 1,
	align: "center",
	justify: "center",
})`
	margin-bottom: 20px;
`;

export const LogoIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 5px;
	border-radius: ${(props) => props.theme.borderRadius.medium};
	background-color: ${(props) => props.theme.palette.primary.main};
`;

export const LogoDesc = styled.h1`
	font-size: 20px !important;
	font-weight: 600 !important;
	color: ${(props) => props.theme.palette.text.primary} !important;
	margin: 0;
	padding: 0;
`;

export const EmpresaLink = styled.a`
	color: ${(props) => props.theme.palette.text.secondary} !important;
	font-size: 14px;
	text-align: center;
	margin-bottom: 10px;
	:hover {
		text-decoration: underline;
	}
`;

export const SearchContainer = styled.div`
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: stretch;
	margin: 0;
	margin-bottom: 15px;
	padding: 0;
	transform: scaleY(0.85);
`;

export const SearchField = styled(Input).attrs({ rounded: "lg", label: EnumMsg.Pesquisar })``;

export const SearchIconContainer = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 8px;

	svg {
		color: ${(props) => props.theme.palette.text.secondary};
	}
`;

export const NavItemsContainer = styled.div`
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: stretch;
`;

export const NavItem = styled.div<INavItemProps>`
	cursor: pointer;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	padding: 5px 0 5px 5px;
	border-radius: ${(props) => props.theme.borderRadius.medium};
	transition: 0.2s;

	:hover {
		background-color: #f5f5f5;
	}
	:active {
		background-color: #e9e9e9;
	}

	::before {
		content: "";
		display: ${(props) => (props.active ? "block" : "none")};
		position: absolute;
		left: -7.5px;
		width: 15px;
		border-radius: 7.5px;
		height: 30px;
		background-color: ${(props) => props.theme.palette.primary.main};
	}

	.icon-container {
		${(props) =>
			props.active &&
			`
		box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
		background-color: ${props.theme.palette.background.main}
	`}
	}
`;

export const NavDivider = styled.div`
	height: 2.7px;
	background: linear-gradient(90.05deg, rgba(196, 196, 196, 0) -0.86%, #c4c4c4 102.45%);
	transform: rotate(180deg);
	margin: 7.5px 0;
`;

export const NavItemIconContainer = styled.div.attrs({ className: "icon-container" })`
	padding: 5px;
	border-radius: ${(props) => props.theme.borderRadius.medium};
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		color: ${(props) => props.theme.palette.text.primary};
	}
`;

export const NavItemText = styled.span`
	color: ${(props) => props.theme.palette.text.primary};
	margin-left: 10px;
`;
