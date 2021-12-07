import MenuPositionType from "../types/MenuPositionType";

export default interface IState {
	position: MenuPositionType;
	favorites: string[];
	hidden: string[];
}
