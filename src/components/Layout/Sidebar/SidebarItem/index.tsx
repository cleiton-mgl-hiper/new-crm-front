import { FC, memo, useEffect, useMemo, useState } from "react";
import ISidebarItemProps from "./interfaces/ISidebarItemProps";
import * as S from "./styles";
import { ContextMenu } from "devextreme-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslate } from "../../../../contexts/TranslateContext";
import IItemActionMenuDataSource from "./interfaces/IItemActionMenuDataSource";
import EnumMsg from "../../../../translate/enums/EnumMsg";
import EnumFlagMenuItem from "../enums/EnumFlagMenuItem";

const SidebarItem: FC<ISidebarItemProps> = ({
	path,
	text,
	icon: Icon,
	flag,
	handleAction,
	sideBarPosition,
	sideBarCompactMode,
	subRoutes,
	renderParentRoute,
	searchValue,
}) => {
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

	const handleItemClick = (subPath?: string) => {
		if (subRoutes?.length) setShowingSubItems((value) => !value);

		if (subPath?.length) {
			navigate(path.concat("/").concat(subPath).replaceAll("//", "/"));
		} else {
			if (subRoutes?.length) {
				if (!renderParentRoute) return;
			}

			if (path && path.replaceAll("/", "")?.length) {
				navigate(path);
			}
		}
	};

	useEffect(() => {
		if (sideBarCompactMode) setShowingSubItems(false);
	}, [sideBarCompactMode]);

	useEffect(() => {
		if (subRoutes?.length && searchValue && searchValue.trim()?.length) {
			const valueSearch = searchValue.trim().toLocaleLowerCase();
			setShowingSubItems((value) => value || subRoutes.findIndex((sr) => translate(sr.name).toLowerCase().indexOf(valueSearch) >= 0) >= 0);
		} else setShowingSubItems(false);
	}, [searchValue, subRoutes, translate]);

	return (
		<S.Container>
			<S.SidebarItem
				id={itemId}
				onClick={() => handleItemClick()}
				active={location.pathname.startsWith(path)}
				containsSubItem={!!subRoutes?.length}
				showingSubItems={showingSubItems}
				sideBarPosition={sideBarPosition}
				sideBarCompactMode={sideBarCompactMode}
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
					{subRoutes
						.filter((sr) => {
							if (!searchValue?.length) return true;
							const valueSearch = searchValue.trim().toLocaleLowerCase();
							return translate(sr.name).toLowerCase().indexOf(valueSearch) >= 0;
						})
						.map(({ name, subPath }) => {
							const subItemId = itemId.concat(`__${subPath.replaceAll("/", "")}`);
							return (
								<S.SidebarItem key={subItemId} id={subItemId} onClick={() => handleItemClick(subPath)} isSubItem sideBarPosition={sideBarPosition}>
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
