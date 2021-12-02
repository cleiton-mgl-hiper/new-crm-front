import { FC } from "react";
import { useField } from "formik";
import IProps from "./interfaces/IProps";
import Input from "../../../Input";

const TextField: FC<IProps> = (props) => {
	const [inputProps, meta] = useField(props.name);

	return (
		<Input
			{...props}
			name={inputProps.name}
			value={inputProps.value}
			onChange={(value, e) => inputProps.onChange(e)}
			onBlur={(e) => inputProps.onBlur(e)}
			errors={meta.error?.length ? [meta.error] : []}
			nativeValidations={false}
		/>
	);
};

export default TextField;
