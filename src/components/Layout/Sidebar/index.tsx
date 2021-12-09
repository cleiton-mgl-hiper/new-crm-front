import { FC, memo, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import IProps from "./interfaces/IProps";
import IMenuItem from "./interfaces/IMenuItem";
import KeyItemActionType from "./SidebarItem/types/KeyItemActionType";
import * as S from "./styles";
import Grid from "../../Grid";
import { MdOutlineArrowForward, MdOutlineArrowBack, MdComputer, MdSearch, MdSettingsBackupRestore, MdVisibilityOff, MdVisibility } from "react-icons/md";
import routes from "../../../config/routes";
import EnumMenuGroup from "../../../config/enums/EnumMenuGroup";
import EnumFlagMenuItem from "./enums/EnumFlagMenuItem";
import SidebarItem from "./SidebarItem";
import { useTranslate } from "../../../contexts/TranslateContext";
import IconButton from "../../IconButton";
import { useMenu } from "../../../contexts/MenuContext";
import IMenuItemsList from "./interfaces/IMenuItemsList";

const Sidebar: FC<IProps> = (props) => {
	//#region Context

	const { translate } = useTranslate();
	const { state: menuState, dispatch: menuDispatch } = useMenu();

	//#endregion

	//#region Memo

	const defaultItems: IMenuItem[] = useMemo(() => {
		return routes
			.filter((x) => x.displayOnMenu)
			.map<IMenuItem>((x) => {
				const menuItem: IMenuItem = {
					name: x.name,
					path: x.path,
					icon: x.icon,
					menuGroup: x.menuGroup,
					flag: EnumFlagMenuItem.Padrao,
					subItems: x.subRoutes,
				};

				return menuItem;
			});
	}, []);

	const defaultGroups: EnumMenuGroup[] = useMemo(
		() =>
			defaultItems
				.map((x) => x.menuGroup || EnumMenuGroup.Outros)
				.reduce<EnumMenuGroup[]>((arr, curr) => (arr.indexOf(curr) === -1 ? [...arr, curr] : arr), []),
		[defaultItems]
	);

	//#endregion

	//#region State

	const [searchValue, setSearchValue] = useState("");
	const [showingHiddenItems, setShowingHiddenItems] = useState<boolean>(false);
	const [haveHiddenItems, setHaveHiddenItems] = useState<boolean>(false);
	const [haveFavoriteItems, setHaveFavoriteItems] = useState<boolean>(false);
	const [items, setItems] = useState<IMenuItemsList>({ default: [], favorites: [], hidden: [] });

	//#endregion

	//#region Callback

	const handleItemAction = useCallback(
		(itemPath: string, actionType: KeyItemActionType) => {
			if (itemPath) {
				switch (actionType) {
					case "fav": {
						let payload = [...menuState.favorites];
						if (payload.indexOf(itemPath) >= 0) payload = payload.filter((x) => x !== itemPath);
						else payload = [...payload, itemPath];
						menuDispatch({ type: "SET_MENU_FAVORITES", payload });
						break;
					}
					case "hide": {
						let payload = [...menuState.hidden];
						if (payload.indexOf(itemPath) >= 0) payload = payload.filter((x) => x !== itemPath);
						else payload = [...payload, itemPath];
						menuDispatch({ type: "SET_MENU_HIDDEN", payload });
						break;
					}
				}
			}
		},
		[menuState.favorites, menuState.hidden, menuDispatch]
	);

	//#endregion

	//#region Effect

	useEffect(() => {
		setHaveFavoriteItems(menuState.favorites?.length > 0);
	}, [menuState.favorites]);

	useEffect(() => {
		setHaveHiddenItems(menuState.hidden?.length > 0);
	}, [menuState.hidden]);

	useEffect(() => {
		const applySearchFilter = (item: IMenuItem) => {
			if (!searchValue || !searchValue.trim()?.length) return true;

			return translate(item.name).toLowerCase().indexOf(searchValue.trim().toLocaleLowerCase()) >= 0;
		};

		const getDefault = () => {
			const retorno = defaultItems.filter((x) => menuState.hidden?.indexOf(x.path) === -1 && menuState.favorites?.indexOf(x.path) === -1);
			return (retorno || []).filter((x) => applySearchFilter(x));
		};

		const getFavorites = () => {
			let favorites = defaultItems.filter((x) => menuState.favorites?.indexOf(x.path) >= 0);
			if (!favorites?.length) return [];
			return favorites.map((x) => ({ ...x, flag: EnumFlagMenuItem.Favorito })).filter((x) => applySearchFilter(x));
		};

		const getHidden = () => {
			let hidden = defaultItems.filter((x) => menuState.hidden?.indexOf(x.path) >= 0);
			if (!hidden?.length) return [];
			return hidden.map((x) => ({ ...x, flag: EnumFlagMenuItem.Oculto })).filter((x) => applySearchFilter(x));
		};

		setItems({
			default: getDefault(),
			favorites: getFavorites(),
			hidden: getHidden(),
		});
	}, [defaultItems, menuState.favorites, menuState.hidden, searchValue, translate]);

	useEffect(() => {
		setShowingHiddenItems((value) => value && haveHiddenItems);
	}, [haveHiddenItems]);

	//#endregion

	const getFooterActions = () => {
		const actions: ReactElement[] = [];

		if (menuState.open) {
			if (menuState.favorites?.length || menuState.hidden?.length) {
				actions.push(
					<IconButton
						key="footer_action_restore_config"
						icon={MdSettingsBackupRestore}
						color="white"
						onClick={() => {
							menuDispatch({ type: "SET_MENU_CONFIG", payload: { open: true, favorites: [], hidden: [], position: menuState.position } });
						}}
					/>
				);
			}

			if (haveHiddenItems) {
				actions.push(
					<IconButton
						key="footer_action_show_hidden_items"
						icon={showingHiddenItems ? MdVisibility : MdVisibilityOff}
						color="white"
						onClick={() => setShowingHiddenItems((value) => !value)}
					/>
				);
			}
		}

		actions.push(
			<IconButton
				key="footer_action_change_side_position"
				icon={menuState.position === "left" ? MdOutlineArrowForward : MdOutlineArrowBack}
				color="white"
				onClick={() => {
					const newPosition = menuState.position === "left" ? "right" : "left";
					menuDispatch({ type: "SET_MENU_POSITION", payload: newPosition });
				}}
			/>
		);

		if (menuState.position === "left") return actions;
		return actions.reverse();
	};

	return (
		<S.Container position={menuState.position} isOpen={menuState.open}>
			<S.LogoContainer>
				<Grid item>
					<S.LogoIconContainer>
						<MdComputer size="20px" color="#FFF" />
					</S.LogoIconContainer>
				</Grid>
				<Grid item>
					<S.LogoDesc>FRG CRM</S.LogoDesc>
				</Grid>
			</S.LogoContainer>

			<S.EmpresaLink>1254 - Fulltime homologação</S.EmpresaLink>

			<S.SearchContainer>
				<S.SearchField value={searchValue} onChange={(value) => setSearchValue(value)} />
				<S.SearchIconContainer>
					<MdSearch size="20" />
				</S.SearchIconContainer>
			</S.SearchContainer>

			<S.ItemsContainer>
				{!showingHiddenItems &&
					haveFavoriteItems &&
					items.favorites.map(({ icon, name, path, flag, subItems }) => (
						<SidebarItem
							key={path}
							path={path}
							icon={icon}
							text={name}
							flag={flag}
							subRoutes={subItems}
							handleAction={handleItemAction}
							sideBarPosition={menuState.position}
						/>
					))}

				{!showingHiddenItems && haveFavoriteItems ? <S.Divider /> : ""}

				{defaultGroups.map((group, idx, arr) => {
					let routesOfGroup = (showingHiddenItems ? items.hidden : items.default).filter((x) => x.menuGroup === group);

					if (routesOfGroup?.length) {
						const items = routesOfGroup.map(({ icon, name, path, flag, subItems }) => (
							<SidebarItem
								key={path}
								path={path}
								icon={icon}
								text={name}
								flag={flag}
								subRoutes={subItems}
								handleAction={handleItemAction}
								sideBarPosition={menuState.position}
							/>
						));

						if (idx < arr.length - 1) items.push(<S.Divider key={`side_divider_${group}`} />);

						return items;
					}

					return null;
				})}
			</S.ItemsContainer>

			<S.Divider />
			<S.FooterActionsContainer>{getFooterActions()}</S.FooterActionsContainer>
		</S.Container>
	);
};

export default memo(Sidebar);
