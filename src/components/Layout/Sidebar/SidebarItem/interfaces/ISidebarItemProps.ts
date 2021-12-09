import { HTMLProps } from "react";
import { IconType } from "react-icons/lib";
import EnumMsg from "../../../../../translate/enums/EnumMsg";
import EnumFlagMenuItem from "../../enums/EnumFlagMenuItem";
import MenuPositionType from "../../../../../contexts/MenuContext/types/MenuPositionType";
import KeyItemActionType from "../types/KeyItemActionType";
import { ISubRouteProps } from "../../../../CrmRoute/interfaces/IProps";

export default interface ISidebarItemProps extends HTMLProps<HTMLDivElement> {
	path: string;
	text: EnumMsg;
	icon?: IconType;
	subRoutes?: ISubRouteProps[];
	flag: EnumFlagMenuItem;
	handleAction: (itemPath: string, actionType: KeyItemActionType) => void;
	sideBarPosition: MenuPositionType;
}
