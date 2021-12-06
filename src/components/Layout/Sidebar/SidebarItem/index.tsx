import { FC, memo, useMemo } from "react";
import ISidebarItemProps from "./interfaces/ISidebarItemProps";
import * as S from "./styles";
import { ContextMenu } from "devextreme-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslate } from "../../../../contexts/TranslateContext";
import IItemActionMenuDataSource from "./interfaces/IItemActionMenuDataSource";
import EnumMsg from "../../../../translate/enums/EnumMsg";
import EnumFlagMenuItem from "../enums/EnumFlagMenuItem";

const SidebarItem: FC<ISidebarItemProps> = ({ path, text, icon: Icon, flag, handleAction, sideBarPosition }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { translate } = useTranslate();

	const menuDataSource: IItemActionMenuDataSource[] = useMemo(
		() => [
			{ text: translate(flag !== EnumFlagMenuItem.Favorito ? EnumMsg.Favorito : EnumMsg.Padrao), key: "fav" },
			{ text: translate(flag !== EnumFlagMenuItem.Oculto ? EnumMsg.Ocultar : EnumMsg.Padrao), key: "hide" },
		],
		[translate, flag]
	);

	const itemId = useMemo(() => `nav_item__${path.replace("/", "")}`, [path]);

	return (
		<>
			<S.SidebarItem id={itemId} onClick={() => navigate(path)} active={path === location.pathname} sideBarPosition={sideBarPosition}>
				{Icon ? (
					<S.SidebarItemIconContainer>
						<Icon size="19" />
					</S.SidebarItemIconContainer>
				) : (
					<></>
				)}
				<S.SidebarItemText>{translate(text)}</S.SidebarItemText>
			</S.SidebarItem>
			<ContextMenu
				dataSource={menuDataSource}
				target={`#${itemId}`}
				onItemClick={({ itemData }) => {
					const action = (itemData as IItemActionMenuDataSource).key;
					handleAction(path, action);
				}}
			/>
		</>
	);
};

export default memo(SidebarItem);
