import styled from "styled-components";

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
		border-radius: ${(props) => props.theme.borderRadius.medium};
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
		min-height: calc(30% + 100px);
		margin-bottom: 20px;
	}
`;

export const CurrentPageName = styled.div`
	padding: 0px 20px 5px 40px;
	display: flex;
	align-items: flex-end;
	font-weight: 600;

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		margin-top: -25px;
		z-index: -1;
	}

	> .pageNameSpan {
		margin-left: 10px;
	}
`;
