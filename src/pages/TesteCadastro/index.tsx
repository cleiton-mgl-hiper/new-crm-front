import { FC } from "react";
import { IProps } from "./interfaces/IProps";
import Form from "../../components/formik/Form";
import ITesteCadastro from "./interfaces/ITesteCadastro";
import { configCadastro } from "./formConfig";
import Container from "../../components/Container";
import { FormikHelpers } from "formik";
import { useTranslate } from "../../contexts/TranslateContext";
import EnumMsg from "../../translate/enums/EnumMsg";

const TesteCadastroPage: FC<IProps> = (props) => {
	const { translate } = useTranslate();

	const initialValues: ITesteCadastro = { email: "", sobrenome: "", nome: "", senha: "", site: "", telefone: "", receberAnuncios: false };

	const handleSubmit = (data: ITesteCadastro, actions: FormikHelpers<ITesteCadastro>) => {
		actions.setSubmitting(true);

		console.log(data);
		setTimeout(() => {
			alert(translate(EnumMsg.Sucesso));
			actions.setSubmitting(false);
		}, 3000);
	};

	return (
		<Container paper selfCenter>
			<Form<ITesteCadastro> config={configCadastro} initialValues={initialValues} submit={handleSubmit} />
		</Container>
	);
};

export default TesteCadastroPage;
