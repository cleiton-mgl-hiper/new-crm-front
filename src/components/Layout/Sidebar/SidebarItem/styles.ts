import styled from "styled-components";
import ISidebarItemStyledProps from "./interfaces/ISidebarItemStyledProps";
import IStyledSubItemsContainerProps from "./interfaces/IStyledSubItemsContainerProps";

export const Container = styled.li`
	list-style: none;
	display: flex;
	flex-flow: column nowrap;
	margin: 0;
	padding: 0;
`;

export const SidebarItem = styled.div<ISidebarItemStyledProps>`
	position: relative;
	cursor: pointer;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	padding-top: ${(props) => (props.isSubItem ? "10px" : "5px")};
	padding-bottom: ${(props) => (props.isSubItem ? "10px" : "5px")};
	padding-left: 15px;
	padding-right: ${(props) => (props.sideBarPosition === "right" ? "15px" : "5px")};
	border-radius: ${(props) => (props.isSubItem ? "0px" : props.theme.borderRadius.medium)};
	transition: 0.2s;

	${(props) => (props.isSubItem ? `background-color: #f5f5f5;` : "")}

	:hover {
		background-color: ${(props) => (props.isSubItem ? `#e9e9e9` : "#f5f5f5")};
	}
	:active {
		background-color: ${(props) => (props.isSubItem ? `transparent` : "#e9e9e9")};
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

	::after {
		content: "";
		display: ${(props) => (props.containsSubItem && !props.sideBarCompactMode ? "block" : "none")};
		position: absolute;
		right: 15px;
		top: calc(50% - 3.75px);
		height: 7.5px;
		width: 7.5px;
		padding: 0px;
		margin: 0px;
		border-top: 2px solid ${(props) => props.theme.palette.text.secondary};
		border-right: 2px solid ${(props) => props.theme.palette.text.secondary};
		transform: ${(props) => (props.showingSubItems ? "rotate(135deg)" : "rotate(45deg)")};
		transition: transform 0.3s;
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
	white-space: nowrap;
	margin-left: 10px;
`;

export const SubItemsContainer = styled.div<IStyledSubItemsContainerProps>`
	max-height: ${(props) => (props.show ? "1000px" : "0px")};
	transition: max-height 0.3s ease-in-out;
	overflow: hidden;
	${(props) => (props.show ? "height: auto;" : "")}
`;
