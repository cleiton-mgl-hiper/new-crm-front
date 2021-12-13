import { FC } from "react";
import IProps from "./interfaces/IProps";
import * as S from "./styles";
import { MdComputer } from "react-icons/md";
import Grid from "../Grid";

const Logo: FC<IProps> = ({ children }) => (
	<S.LogoContainer>
		<Grid item>
			<S.LogoIconContainer>
				<MdComputer size="20px" color="#FFF" />
			</S.LogoIconContainer>
		</Grid>
		<Grid item>
			<S.LogoDesc>FRG CRM</S.LogoDesc>
		</Grid>
		{children}
	</S.LogoContainer>
);

export default Logo;
