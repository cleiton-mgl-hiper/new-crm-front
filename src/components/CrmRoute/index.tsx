import React, { FC, useCallback, useEffect, useState } from "react";
import IProps from "./interfaces/IProps";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const CrmRoute: FC<IProps> = ({ component: Component, layout: Layout, name, icon, getProps, isPrivate }) => {
	const [defaultPageProps, setDefaultPageProps] = useState<object | null>({});
	const [allowedAccess, setAllowedAccess] = useState<boolean>(false);

	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!!getProps) {
			getProps()
				.then((dp) => setDefaultPageProps(dp || {}))
				.catch((err) => {
					console.error(`Erro ao buscar DefaultProps da page ${name}. \n ${err}`);
				});
		}
	}, [getProps, name]);

	useEffect(() => {
		if (isPrivate) {
			setAllowedAccess(true);
		} else setAllowedAccess(true);
	}, [isPrivate]);

	const getChildren = useCallback(() => {
		if (allowedAccess) return <Component {...defaultPageProps} routeLocation={location} routeNavigate={navigate} routeParams={params} />;
		return <div />;
	}, [allowedAccess, Component, defaultPageProps, location, params, navigate]);

	return Layout ? <Layout name={name} icon={icon} children={getChildren()} /> : <>{getChildren()}</>;
};

export default CrmRoute;
