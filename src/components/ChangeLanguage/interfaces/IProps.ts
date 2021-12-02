import LangType from "../../../translate/types/LangType";

export default interface IProps {
	order?: LangType[];
	callback?: () => void;
}
