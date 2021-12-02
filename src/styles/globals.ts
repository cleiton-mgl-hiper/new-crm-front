import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Helvetica Neue","Segoe UI",helvetica,verdana,sans-serif;
	}

	body {
		background-color: ${(props) => props.theme.palette.background.main} !important;
		font-size: 14px !important;
		color: ${(props) => props.theme.palette.text.primary} !important;
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.palette.text.primary} !important;
	}

	#root {
		height: 100vh;
	}
`;
