import { FC } from "react";
import { IProps } from "./interfaces/IProps";
import CadastroPage from "../GenericCadastroPage";
import { configCadastro } from "./formConfig";
import IMarca from "./interfaces/IMarca";
import { MarcasServiceModule as service } from "../../services/crmApiService";

const MarcasPage: FC<IProps> = () => <CadastroPage<IMarca> formConfig={configCadastro} service={service} />;

export default MarcasPage;
