import { EventObject } from "devextreme/events";
import { BorderRadius } from "../../../styles/types";

export default interface IProps {
	name?: string;
	mode?: "text" | "password" | "url" | "email" | "search" | "tel" | undefined;
	showClearButton?: boolean;
	required?: boolean;
	label?: string;
	minLength?: number;
	maxLength?: number;
	compareRule?: () => boolean;
	rounded?: BorderRadius;
	errors?: string[];
	autoFocus?: boolean;
	nativeValidations?: boolean;
	onBlur?: (e: EventObject | undefined) => void;
	onChange?: (value: string, event: EventObject | undefined) => void;
	value?: string;
}
