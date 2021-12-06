import { HTMLProps } from "react";
import { IconType } from "react-icons/lib";
import EnumMsg from "../../../../../translate/enums/EnumMsg";
import EnumFlagMenuItem from "../../enums/EnumFlagMenuItem";
import SidebarPositionType from "../../types/SidebarPositionType";
import KeyItemActionType from "../types/KeyItemActionType";

export default interface ISidebarItemProps extends HTMLProps<HTMLDivElement> {
	path: string;
	text: EnumMsg;
	icon?: IconType;
	flag: EnumFlagMenuItem;
	handleAction: (itemPath: string, actionType: KeyItemActionType) => void;
	sideBarPosition: SidebarPositionType;
}
