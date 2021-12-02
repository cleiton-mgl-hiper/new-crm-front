import React from "react";
import EnumMsg from "../../../translate/enums/EnumMsg";
import IDispatch from "./IDispatch";
import IState from "./IState";

export default interface IValue {
	state: IState;
	dispatch: React.Dispatch<IDispatch>;
	translate: (key: EnumMsg) => string;
}
