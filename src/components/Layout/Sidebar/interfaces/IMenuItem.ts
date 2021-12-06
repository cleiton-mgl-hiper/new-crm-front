import { IconType } from "react-icons/lib";
import EnumMenuGroup from "../../../../config/enums/EnumMenuGroup";
import EnumMsg from "../../../../translate/enums/EnumMsg";
import EnumFlagMenuItem from "../enums/EnumFlagMenuItem";

export default interface IMenuItem {
	path: string;
	name: EnumMsg;
	icon?: IconType;
	menuGroup?: EnumMenuGroup;
	flag: EnumFlagMenuItem;
}
