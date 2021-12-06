import { FC, useMemo, useState } from "react";
import * as S from "./styles";
import IProps from "./interfaces/IProps";
import { MdNotifications, MdPersonOutline } from "react-icons/md";
import { ReactComponent as BrazilIcon } from "../../../assets/svg/brazil.svg";
import { ReactComponent as SpainIcon } from "../../../assets/svg/spain.svg";
import { ReactComponent as USAIcon } from "../../../assets/svg/usa.svg";
import ChangeLanguage from "../../ChangeLanguage";
import { useTranslate } from "../../../contexts/TranslateContext";
import LangType from "../../../translate/types/LangType";
import IconButton from "../../IconButton";

const Navbar: FC<IProps> = (props) => {
	const [changingLang, setChangingLang] = useState(false);

	const {
		state: { lang },
	} = useTranslate();

	const langs: LangType[] = useMemo(() => ["ptBR", "enUS", "es"], []);
	const changeLangOrder: LangType[] = useMemo(
		() =>
			langs.sort((x, y) => {
				if (x === lang) return 1;
				if (y === lang) return -1;
				if (x === "ptBR") return -1;
				return 1;
			}),
		[langs, lang]
	);

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
			<IconButton color="white" icon={MdNotifications} />
			<IconButton color="white" icon={MdPersonOutline} />
		</S.Container>
	);
};

export default Navbar;
