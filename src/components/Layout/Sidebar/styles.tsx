import styled from "styled-components";
import EnumMsg from "../../../translate/enums/EnumMsg";
import Grid from "../../Grid";
import Input from "../../Input";
import IStyledFixBtnProps from "./interfaces/IStyledFixBtnProps";
import IStyledSideProps from "./interfaces/IStyledSideProps";
import { SidebarItem, SidebarItemText, SubItemsContainer } from "./SidebarItem/styles";

export const Container = styled.nav<IStyledSideProps>`
	position: fixed;
	z-index: 5;
	height: 100%;
	width: 230px;
	background-color: ${(props) => props.theme.palette.background.paper};
	box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	padding: 15px 0px 10px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: stretch;
	transition: width 0.35s ease-in-out;

	${(props) => (props.position === "right" ? "right: 0px" : "")};

	:hover {
		${SidebarItem} {
			::after {
				display: block;
			}
		}
	}

	:not(:hover) {
		${(props) =>
			!props.isOpen
				? `
				width: 60px;
				${LogoDesc} { display: none; }
				${FixBtn} { display: none; }
				${EmpresaLink} { opacity: 0; }
				${SearchContainer} { opacity: 0; }
				${SidebarItemText} { opacity: 0; }
				${SidebarItem} { ::after { display: none; } }
				${SubItemsContainer} { max-height: 0px; height: unset; }
			`
				: ""}
	}
`;

export const LogoContainer = styled(Grid).attrs({
	spacing: 1,
	align: "center",
	justify: "center",
})`
	padding: 0px 10px;
	margin-bottom: 25px;
	flex-wrap: nowrap;
	position: relative;
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
	font-size: 18px !important;
	font-weight: 600 !important;
	color: ${(props) => props.theme.palette.text.primary} !important;
	margin: 0;
	padding: 0;
	white-space: nowrap;
`;

export const FixBtn = styled.div<IStyledFixBtnProps>`
	position: absolute;
	height: 40px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: calc(50% - 20px);
	cursor: pointer;

	@media (max-width: ${(props) => props.theme.breakpoints.md}) {
		display: none;
	}

	${(props) => (props.menuPosition === "right" ? "left: 0;" : "right: 0;")}
	${(props) => (!props.fixed ? "transform: rotate(45deg);" : "")}

	svg {
		color: ${(props) => props.theme.palette.text.secondary};
	}
`;

export const EmpresaLink = styled.a`
	color: ${(props) => props.theme.palette.text.secondary} !important;
	font-size: 14px;
	text-align: center;
	padding: 0px 10px;
	margin-bottom: 10px;
	white-space: nowrap;
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
	padding: 0px 10px;
	margin: 0;
	margin-bottom: 15px;
	transform: scaleY(0.85);
	transition: opacity 0.4s ease-in-out;
`;

export const SearchField = styled(Input).attrs({ rounded: "lg", label: EnumMsg.Pesquisar })``;

export const SearchIconContainer = styled.div`
	position: absolute;
	right: 10px;
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

export const ItemsContainer = styled.ul`
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: stretch;
`;

export const Divider = styled.li`
	list-style: none;
	height: 2.7px;
	background: linear-gradient(90.05deg, rgba(196, 196, 196, 0) -0.86%, #c4c4c4 102.45%);
	transform: rotate(180deg);
	margin: 7.5px 0;
`;

export const FooterActionsContainer = styled.div`
	padding: 5px 10px 0px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
`;
