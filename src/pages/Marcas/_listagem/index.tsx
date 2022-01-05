import { FC, useEffect, useState } from "react";
import IProps from "./interfaces/IProps";
import DataGrid, { Scrolling, LoadPanel, Column, SearchPanel } from "devextreme-react/data-grid";
import IMarca from "../_cadastro/interfaces/IMarca";
import { MarcasServiceModule as service } from "../../../services/crmApiService";
import { useAuth } from "../../../contexts/AuthContext";
import notify from "devextreme/ui/notify";
import { useTranslate } from "../../../contexts/TranslateContext";
import EnumMsg from "../../../translate/enums/EnumMsg";
import IconButton from "../../../components/IconButton";
import { MdDelete, MdEdit } from "react-icons/md";

const ListagemMarcas: FC<IProps> = ({ onEdit }) => {
	const [lista, setLista] = useState<IMarca[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const {
		state: { user },
	} = useAuth();
	const { translate } = useTranslate();

	useEffect(() => {
		service
			.get(user?.empresaAtiva || 0)
			.then(setLista)
			.catch((err) => {
				notify(translate(EnumMsg.ErroInesperado), "warning", 2000);
				console.error(err);
			});
	}, [user?.empresaAtiva, translate]);

	return (
		<>
			<DataGrid height={440} dataSource={lista} keyExpr="id" showBorders={true} onContentReady={() => setLoading(false)} showRowLines rowAlternationEnabled>
				<SearchPanel visible highlightCaseSensitive={false} placeholder={translate(EnumMsg.Pesquisar)} width={300} />

				<Scrolling mode="virtual" />
				<LoadPanel enabled={loading} />

				<Column dataField="codigo" caption={translate(EnumMsg.Codigo)} />
				<Column dataField="descricao" caption={translate(EnumMsg.Descricao)} />
				<Column cellRender={({ data }) => <IconButton icon={MdEdit} variant="outlined" color="secondary" onClick={() => onEdit(data.id)} />} width={50} />
				<Column cellRender={() => <IconButton icon={MdDelete} variant="outlined" />} width={50} />
			</DataGrid>
		</>
	);
};

export default ListagemMarcas;
