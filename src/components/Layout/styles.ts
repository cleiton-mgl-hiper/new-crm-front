import styled from "styled-components";
import IStyledCurrentPageNameProps from "./interfaces/IStyledCurrentPageNameProps";

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	overflow: hidden;
	position: relative;
	::after {
		content: "";
		height: 180px;
		width: 100%;
		position: absolute;
		top: calc(30%);
		background-color: ${(props) => props.theme.palette.primary.main};
		z-index: -1;
	}
`;

export const RightContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: stretch;
`;

export const Main = styled.main`
	flex: 1;
	overflow: auto;
	padding: 2px 20px;
	> * {
		background-color: ${(props) => props.theme.palette.background.paper};
		border-radius: ${(props) => props.theme.borderRadius.medium};
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
		margin-bottom: 20px;
	}
	> *:nth-child(1) {
		min-height: calc(30% + 100px);
	}
`;

export const CurrentPageName = styled.div<IStyledCurrentPageNameProps>`
	padding: 0px 20px 5px 40px;
	display: flex;
	justify-content: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
	align-items: flex-end;
	font-weight: 600;

	> .pageNameSpan {
		margin-left: 10px;
	}
`;
