import React, { FC, useCallback, useEffect, useState } from "react";
import IProps from "./interfaces/IProps";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const CrmRoute: FC<IProps> = ({ component: Component, layout: Layout, name, icon, isPrivate }) => {
	const [allowedAccess, setAllowedAccess] = useState<boolean>(false);

	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isPrivate) {
			setAllowedAccess(true);
		} else setAllowedAccess(true);
	}, [isPrivate]);

	const getChildren = useCallback(() => {
		if (allowedAccess) return Component ? <Component routeLocation={location} routeNavigate={navigate} routeParams={params} /> : <div />;
		return <div />;
	}, [allowedAccess, Component, location, params, navigate]);

	return Layout ? <Layout name={name} icon={icon} children={getChildren()} /> : <>{getChildren()}</>;
};

export default CrmRoute;
