import { FC } from "react";
import IProps from "./interfaces/IProps";
import * as S from "./styles";
import { CheckBox as DevCheck, Validator } from "devextreme-react";
import { CustomRule } from "devextreme-react/data-grid";

const CheckBox: FC<IProps> = ({ errors, ...props }) => (
	<S.Container>
		<DevCheck {...props}>
			<Validator>{errors?.length ? errors.map((err) => <CustomRule message={err} validationCallback={() => false} />) : null}</Validator>
		</DevCheck>
	</S.Container>
);

export default CheckBox;
