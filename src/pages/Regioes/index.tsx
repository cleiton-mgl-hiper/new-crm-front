import { FC } from "react";
import IProps from "./interfaces/IProps";
import CadastroPage from "../GenericCadastroPage";
import { configCadastro } from "./formConfig";
import IRegiao from "./interfaces/IRegiao";
import { RegiaoServiceModule as service } from "../../services/crmApiService";

const RegioesPage: FC<IProps> = () => <CadastroPage<IRegiao> formConfig={configCadastro} service={service} />;

export default RegioesPage;
