import EnumActionType from "../enums/EnumActionType";

export default interface IDispatch {
	type: EnumActionType;
	payload: any;
}
