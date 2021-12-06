import IButtonProps from "../../Button/interfaces/IProps";
import { IconType } from "react-icons/lib";

export default interface IProps extends IButtonProps {
	icon: IconType;
}
