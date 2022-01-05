import { FC, useEffect, useState } from "react";
import { IProps } from "./interfaces/IProps";
import * as S from "./styles";
import Container from "../../components/Container";
import CadastroMarca from "./_cadastro";
import ListagemMarcas from "./_listagem";
import Button from "../../components/Button";
import { useTranslate } from "../../contexts/TranslateContext";
import EnumMsg from "../../translate/enums/EnumMsg";

const MarcasPage: FC<IProps> = () => {
	const [idEdit, setIdEdit] = useState<number>(0);
	const [showList, setShowList] = useState<boolean>(!idEdit);

	const { translate } = useTranslate();

	useEffect(() => {
		if (idEdit) setShowList(false);
	}, [idEdit]);

	useEffect(() => {
		if (showList) setIdEdit(0);
	}, [showList]);

	return (
		<Container paper selfCenter>
			<Button color="secondary" onClick={() => setShowList((v) => !v)}>
				{showList ? translate(EnumMsg.Adicionar) : translate(EnumMsg.Voltar)}
			</Button>
			<S.Content>{showList ? <ListagemMarcas onEdit={setIdEdit} /> : <CadastroMarca idEdit={idEdit} onUpdated={() => setShowList(true)} />}</S.Content>
		</Container>
	);
};

export default MarcasPage;
