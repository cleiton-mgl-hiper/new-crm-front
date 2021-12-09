import { FC, memo, useMemo, useState } from "react";
import ISidebarItemProps from "./interfaces/ISidebarItemProps";
import * as S from "./styles";
import { ContextMenu } from "devextreme-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslate } from "../../../../contexts/TranslateContext";
import IItemActionMenuDataSource from "./interfaces/IItemActionMenuDataSource";
import EnumMsg from "../../../../translate/enums/EnumMsg";
import EnumFlagMenuItem from "../enums/EnumFlagMenuItem";

const SidebarItem: FC<ISidebarItemProps> = ({ path, text, icon: Icon, flag, handleAction, sideBarPosition, subRoutes }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { translate } = useTranslate();

	const [showingSubItems, setShowingSubItems] = useState<boolean>(false);

	const menuDataSource: IItemActionMenuDataSource[] = useMemo(
		() => [
			{ text: translate(flag !== EnumFlagMenuItem.Favorito ? EnumMsg.Favorito : EnumMsg.Padrao), key: "fav" },
			{ text: translate(flag !== EnumFlagMenuItem.Oculto ? EnumMsg.Ocultar : EnumMsg.Padrao), key: "hide" },
		],
		[translate, flag]
	);

	const itemId = useMemo(() => `nav_item__${path.replaceAll("/", "")}`, [path]);

	const handleItemClick = () => {
		if (path && path.replaceAll("/", "")?.length) navigate(path);
		if (subRoutes?.length) setShowingSubItems((value) => !value);
	};

	return (
		<S.Container>
			<S.SidebarItem
				id={itemId}
				onClick={() => handleItemClick()}
				active={location.pathname.startsWith(path)}
				containsSubItem={!!subRoutes?.length}
				showingSubItems={showingSubItems}
				sideBarPosition={sideBarPosition}
			>
				{Icon ? (
					<S.SidebarItemIconContainer>
						<Icon size="19" />
					</S.SidebarItemIconContainer>
				) : (
					<></>
				)}
				<S.SidebarItemText>{translate(text)}</S.SidebarItemText>
			</S.SidebarItem>

			{subRoutes?.length ? (
				<S.SubItemsContainer show={showingSubItems}>
					{subRoutes.map(({ name, subPath }) => {
						const subItemId = itemId.concat(`__${subPath.replaceAll("/", "")}`);
						return (
							<S.SidebarItem key={subItemId} id={subItemId} onClick={() => handleItemClick()} isSubItem sideBarPosition={sideBarPosition}>
								<S.SidebarItemText>{translate(name)}</S.SidebarItemText>
							</S.SidebarItem>
						);
					})}
				</S.SubItemsContainer>
			) : null}

			<ContextMenu
				dataSource={menuDataSource}
				target={`#${itemId}`}
				onItemClick={({ itemData }) => {
					const action = (itemData as IItemActionMenuDataSource).key;
					handleAction(path, action);
				}}
			/>
		</S.Container>
	);
};

export default memo(SidebarItem);
