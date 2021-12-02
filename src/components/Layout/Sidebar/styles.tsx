import styled from "styled-components";

export const Container = styled.nav`
	height: 100%;
	width: 270px;
	background-color: ${(props) => props.theme.palette.background.paper};
	box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.25);
	overflow-x: hidden;
	overflow-y: auto;
	padding: 30px 15px;
`;
