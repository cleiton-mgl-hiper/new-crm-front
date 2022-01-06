import { FC } from "react";
import { IProps } from "./interfaces/IProps";
import CadastroPage from "../GenericCadastroPage";
import { configCadastro } from "./formConfig";
import IOrigemProspect from "./interfaces/IOrigemProspect";
import { OrigemProspectServiceModule as service } from "../../services/crmApiService";

const OrigemProspectPage: FC<IProps> = () => <CadastroPage<IOrigemProspect> formConfig={configCadastro} service={service} />;

export default OrigemProspectPage;
