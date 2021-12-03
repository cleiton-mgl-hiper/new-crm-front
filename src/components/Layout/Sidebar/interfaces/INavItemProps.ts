import { HTMLProps } from "react";

export default interface INavItemProps extends HTMLProps<HTMLDivElement> {
	active: boolean;
}
