import styled from "styled-components";
import IStyledNavProps from "./interfaces/IStyledNavProps";

export const Container = styled.div<IStyledNavProps>`
	display: flex;
	flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
	justify-content: flex-end;
	align-items: baseline;
	padding: 10px 20px;
	margin-bottom: 5px;
	> * {
		margin: 0px 5px;
	}
`;

export const LangContainer = styled.div`
	opacity: 0.4;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: all 0.2s ease-in-out;

	:hover {
		opacity: 1;
	}
`;

export const Separator = styled.div`
	flex: 1;
`;
