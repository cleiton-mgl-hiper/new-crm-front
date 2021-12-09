import { FC } from "react";
import IProps from "./interfaces/IProps";
import * as S from "./styles";
import { TextBox, Validator } from "devextreme-react";
import { CompareRule, EmailRule, RequiredRule, StringLengthRule, CustomRule } from "devextreme-react/data-grid";
import { useTranslate } from "../../contexts/TranslateContext";

const Input: FC<IProps> = ({
	name,
	mode = "text",
	showClearButton = false,
	required = false,
	rounded = "md",
	errors = [],
	compareRule = null,
	minLength = 0,
	maxLength,
	autoFocus = false,
	label,
	nativeValidations = true,
	onBlur,
	onChange,
	value,
}) => {
	const { translate } = useTranslate();

	const labelText = label ? translate(label).concat(":") : "";

	return (
		<S.Container rounded={rounded} errors={errors} required={required}>
			<TextBox
				name={name}
				mode={mode}
				labelMode="floating"
				label={required ? "*".concat(labelText) : labelText}
				stylingMode="filled"
				showClearButton={showClearButton}
				height="40px"
				onInitialized={(e) => {
					setTimeout(function () {
						if (autoFocus) e.component?.focus();
						else e.component?.blur();
					}, 0);
				}}
				valueChangeEvent="input"
				maxLength={`${maxLength}`}
				onFocusOut={(e) => onBlur && onBlur(e.event)}
				onValueChanged={(e) => onChange && onChange(e.value, e.event)}
				value={value}
			>
				<Validator>
					{errors?.length
						? errors
								.reduce<string[]>((arr, curr) => (arr.indexOf(curr) >= 0 ? arr : [...arr, curr]), [])
								.map((err) => <CustomRule key={err} message={err} validationCallback={() => false} />)
						: null}

					{nativeValidations ? (
						<>
							{mode === "email" ? <EmailRule message="Email inválido" /> : null}
							{required ? <RequiredRule message="Campo obrigatório" /> : null}
							{compareRule ? <CompareRule message="Confirmação diferente do valor original" comparisonTarget={compareRule} /> : null}
							{maxLength ? <StringLengthRule message={`Tamanho máximo é de ${maxLength} caracteres`} max={maxLength?.toString()} /> : null}
							{minLength ? <StringLengthRule message={`Tamanho mínimo é de ${minLength} caracteres`} min={minLength?.toString()} /> : null}
						</>
					) : (
						""
					)}
				</Validator>
			</TextBox>
		</S.Container>
	);
};

export default Input;
