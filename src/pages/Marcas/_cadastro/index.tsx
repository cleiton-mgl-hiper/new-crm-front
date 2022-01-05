import { FC, useEffect, useState } from "react";
import notify from "devextreme/ui/notify";
import IProps from "./interfaces/IProps";
import Form from "../../../components/formik/Form";
import IMarca from "./interfaces/IMarca";
import { configCadastro } from "./formConfig";
import { FormikHelpers } from "formik";
import { useTranslate } from "../../../contexts/TranslateContext";
import EnumMsg from "../../../translate/enums/EnumMsg";
import { useAuth } from "../../../contexts/AuthContext";
import { MarcasServiceModule as service } from "../../../services/crmApiService";

const CadastroMarca: FC<IProps> = ({ idEdit, onAdded, onUpdated }) => {
	const { translate } = useTranslate();
	const {
		state: { user },
	} = useAuth();

	const [initialValues, setInitialValues] = useState<IMarca>({ id: 0, codigo: 0, empresaId: user?.empresaAtiva || 0, descricao: "" });

	const handleSubmit = (data: IMarca, actions: FormikHelpers<IMarca>) => {
		actions.setSubmitting(true);

		if (!data.id) {
			service
				.post(data)
				.then(() => {
					actions.resetForm();
					notify(translate(EnumMsg.Sucesso), "success", 2000);
					onAdded && onAdded();
				})
				.catch((err) => {
					console.error(err);
					notify(translate(EnumMsg.ErroInesperado), "warning", 2000);
				})
				.finally(() => actions.setSubmitting(false));
		} else {
			service
				.put(data)
				.then(() => {
					notify(translate(EnumMsg.Sucesso), "success", 2000);
					onUpdated && onUpdated();
				})
				.catch((err) => {
					console.error(err);
					notify(translate(EnumMsg.ErroInesperado), "warning", 2000);
				})
				.finally(() => actions.setSubmitting(false));
		}
	};

	useEffect(() => {
		if (!!idEdit) {
			service
				.getById(idEdit, user?.empresaAtiva || 0)
				.then((marca) => marca && setInitialValues(marca))
				.catch((err) => {
					console.error(err);
					notify(translate(EnumMsg.ErroInesperado), "success", 2000);
				});
		}
	}, [idEdit, translate, user?.empresaAtiva]);

	return <Form<IMarca> config={configCadastro} initialValues={initialValues} submit={handleSubmit} />;
};

export default CadastroMarca;
