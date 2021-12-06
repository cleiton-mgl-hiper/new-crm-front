import { FC, memo, useCallback, useEffect, useState } from "react";
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
import SidebarPositionType from "./types/SidebarPositionType";

const Sidebar: FC<IProps> = (props) => {
	const { translate } = useTranslate();

	const getDefaultItems: () => IMenuItem[] = useCallback(() => {
		return routes
			.filter((x) => x.displayOnMenu)
			.map<IMenuItem>((x) => {
				const menuItem: IMenuItem = {
					name: x.name,
					path: x.path,
					icon: x.icon,
					menuGroup: x.menuGroup,
					flag: EnumFlagMenuItem.Padrao,
				};

				return menuItem;
			});
	}, []);

	const getDefaultGroups: () => EnumMenuGroup[] = useCallback(
		() =>
			getDefaultItems()
				.map((x) => x.menuGroup || EnumMenuGroup.Outros)
				.reduce((arr, curr) => (arr.indexOf(curr) === -1 ? [...arr, curr] : arr), [] as EnumMenuGroup[]),
		[getDefaultItems]
	);

	const [searchValue, setSearchValue] = useState("");
	const [position, setPosition] = useState<SidebarPositionType>("left");
	const [showingHiddenItems, setShowingHiddenItems] = useState<boolean>(false);

	const [items, setItems] = useState<IMenuItem[]>(getDefaultItems());
	const [favoriteItems, setFavoriteItems] = useState<IMenuItem[]>([]);

	const [haveHiddenItems, setHaveHiddenItems] = useState<boolean>(false);

	useEffect(() => {
		setFavoriteItems(items.filter((x) => x.flag === EnumFlagMenuItem.Favorito));
		setHaveHiddenItems(items.find((x) => x.flag === EnumFlagMenuItem.Oculto) !== undefined);
	}, [items]);

	useEffect(() => {
		setShowingHiddenItems((value) => value && haveHiddenItems);
	}, [haveHiddenItems]);

	const handleSearchFilter = useCallback(
		(item: IMenuItem) => {
			if (!searchValue || !searchValue.trim()?.length) return true;

			return translate(item.name).toLowerCase().indexOf(searchValue.trim().toLocaleLowerCase()) >= 0;
		},
		[searchValue, translate]
	);

	const handleItemAction = useCallback(
		(itemPath: string, actionType: KeyItemActionType) => {
			const cloneItems = [...items];
			const itemChange = cloneItems.find((x) => x.path === itemPath);

			if (itemChange) {
				switch (actionType) {
					case "fav": {
						itemChange.flag = itemChange.flag !== EnumFlagMenuItem.Favorito ? EnumFlagMenuItem.Favorito : EnumFlagMenuItem.Padrao;
						break;
					}
					case "hide": {
						itemChange.flag = itemChange.flag !== EnumFlagMenuItem.Oculto ? EnumFlagMenuItem.Oculto : EnumFlagMenuItem.Padrao;
						break;
					}
				}

				setItems(cloneItems);
			}
		},
		[items]
	);

	const getFooterActions = useCallback(() => {
		const arr = [
			<IconButton
				key="footer_action_restore_config"
				icon={MdSettingsBackupRestore}
				color="white"
				onClick={() => {
					setItems(getDefaultItems());
				}}
			/>,
			haveHiddenItems ? (
				<IconButton
					key="footer_action_show_hidden_items"
					icon={showingHiddenItems ? MdVisibility : MdVisibilityOff}
					color="white"
					onClick={() => setShowingHiddenItems((value) => !value)}
				/>
			) : null,
			<IconButton
				key="footer_action_change_side_position"
				icon={position === "left" ? MdOutlineArrowForward : MdOutlineArrowBack}
				color="white"
				onClick={() => setPosition((pos) => (pos === "left" ? "right" : "left"))}
			/>,
		];

		if (position === "left") return arr;
		return arr.reverse();
	}, [getDefaultItems, position, showingHiddenItems, haveHiddenItems]);

	return (
		<S.Container position={position}>
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
					favoriteItems
						.filter((x) => handleSearchFilter(x))
						.map(({ icon, name, path, flag }) => (
							<SidebarItem key={path} path={path} icon={icon} text={name} flag={flag} handleAction={handleItemAction} sideBarPosition={position} />
						))}

				{!showingHiddenItems && favoriteItems?.length ? <S.Divider style={{ marginBottom: "25px" }} /> : ""}

				{getDefaultGroups().map((group, idx, arr) => {
					const routesOfGroup = items.filter(
						(x) => x.menuGroup === group && x.flag === (showingHiddenItems ? EnumFlagMenuItem.Oculto : EnumFlagMenuItem.Padrao) && handleSearchFilter(x)
					);

					if (routesOfGroup?.length) {
						const items = routesOfGroup.map(({ icon, name, path, flag }) => (
							<SidebarItem key={path} path={path} icon={icon} text={name} flag={flag} handleAction={handleItemAction} sideBarPosition={position} />
						));

						if (idx < arr.length - 1) items.push(<S.Divider key={idx} />);

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
