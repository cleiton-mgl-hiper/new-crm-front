import { FC, useState } from "react";
import * as S from "./styles";
import IProps from "./interfaces/IProps";
import { MdNotifications, MdPersonOutline } from "react-icons/md";
import { useTheme } from "styled-components";
import { ReactComponent as BrazilIcon } from "../../../assets/svg/brazil.svg";
import { ReactComponent as SpainIcon } from "../../../assets/svg/spain.svg";
import { ReactComponent as USAIcon } from "../../../assets/svg/usa.svg";
import ChangeLanguage from "../../ChangeLanguage";
import { useTranslate } from "../../../contexts/TranslateContext";
import LangType from "../../../translate/types/LangType";

const Navbar: FC<IProps> = (props) => {
	const [changingLang, setChangingLang] = useState(false);

	const theme = useTheme();
	const {
		state: { lang },
	} = useTranslate();

	const langs: LangType[] = ["ptBR", "enUS", "es"];
	const changeLangOrder: LangType[] = langs.sort((x, y) => {
		if (x === lang) return 1;
		if (y === lang) return -1;
		if (x === "ptBR") return -1;
		return 1;
	});
	return (
		<S.Container>
			{changingLang ? (
				<ChangeLanguage callback={() => setChangingLang(false)} order={changeLangOrder} />
			) : (
				<S.LangContainer onClick={() => setChangingLang(true)}>
					{lang === "enUS" && <USAIcon height="20" />}
					{lang === "es" && <SpainIcon height="20" />}
					{lang === "ptBR" && <BrazilIcon height="20" />}
				</S.LangContainer>
			)}
			<S.IconButton>
				<MdNotifications color={theme.palette.black.light} size="20px" />
			</S.IconButton>
			<S.IconButton>
				<MdPersonOutline color={theme.palette.black.light} size="20px" />
			</S.IconButton>
		</S.Container>
	);
};

export default Navbar;
