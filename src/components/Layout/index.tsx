import { FC } from "react";
import IProps from "./interfaces/IProps";
import * as S from "./styles";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTranslate } from "../../contexts/TranslateContext";
import { useTheme } from "styled-components";
import { useMenu } from "../../contexts/MenuContext";

const Layout: FC<IProps> = ({ name, icon: Icon, children }) => {
	const { translate } = useTranslate();
	const theme = useTheme();
	const {
		state: { position: menuPosition, open: menuIsOpen },
	} = useMenu();

	return (
		<S.Container>
			<Navbar />
			<Sidebar />
			<S.ContentContainer menuPosition={menuPosition} menuIsOpen={menuIsOpen}>
				<S.CurrentPageName reverse={menuPosition === "right"}>
					{Icon && <Icon color={theme.palette.black.main} size="20px" />}
					<span className="pageNameSpan">{translate(name)}</span>
				</S.CurrentPageName>
				<S.Main>{children}</S.Main>
			</S.ContentContainer>
		</S.Container>
	);
};

export default Layout;
