import styled from "styled-components";
import ISidebarItemStyledProps from "./interfaces/ISidebarItemStyledProps";

export const SidebarItem = styled.li<ISidebarItemStyledProps>`
	list-style: none;
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
		width: 15px;
		border-radius: 7.5px;
		height: 30px;
		background-color: ${(props) => props.theme.palette.primary.main};
		${(props) => (props.sideBarPosition === "left" ? "left: -7.5px" : "right: -7.5px")}
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

export const SidebarItemIconContainer = styled.div.attrs({ className: "icon-container" })`
	padding: 5px;
	border-radius: ${(props) => props.theme.borderRadius.medium};
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		color: ${(props) => props.theme.palette.text.primary};
	}
`;

export const SidebarItemText = styled.span`
	color: ${(props) => props.theme.palette.text.primary};
	margin-left: 10px;
`;
