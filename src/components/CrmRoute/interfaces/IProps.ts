import { FC } from "react";
import { IconType } from "react-icons/lib";
import IDefaultLayoutProps from "../../../config/interfaces/IDefaultLayoutProps";
import IPageProps from "../../../pages/interfaces/IPageProps";
import EnumMsg from "../../../translate/enums/EnumMsg";

export default interface IProps {
	path: string;
	component: FC<IPageProps>;
	layout?: FC<IDefaultLayoutProps>;
	name: EnumMsg;
	icon?: IconType;
	isPrivate: boolean;
	getProps?: () => Promise<object>;
}
