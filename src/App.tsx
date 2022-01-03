import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrmRoute from "./components/CrmRoute";
import routes from "./config/routes";
import GlobalStyles from "./styles/globals";
import { AuthProvider } from "./contexts/AuthContext";
import { TranslateProvider } from "./contexts/TranslateContext";
import { ThemeProvider } from "styled-components";
import LightTheme from "./styles/themes/LightTheme";
import { MenuProvider } from "./contexts/MenuContext";
import "devextreme/dist/css/dx.light.css";

const App: FC = () => {
	return (
		<AuthProvider>
			<TranslateProvider>
				<ThemeProvider theme={LightTheme}>
					<MenuProvider>
						<GlobalStyles />
						<BrowserRouter>
							<Routes>
								{routes.map((route) => {
									const routeComponent = <Route path={route.path} key={route.path} element={<CrmRoute {...route} />} />;

									if (!route.subRoutes?.length) return routeComponent;
									else {
										const itemRoutes = route.subRoutes.map((subRoute) => {
											let path = route.path.concat("/").concat(subRoute.subPath);
											path = path.replaceAll("//", "/");

											return (
												<Route
													path={path}
													key={path}
													element={
														<CrmRoute
															path={path}
															component={subRoute.component}
															displayOnMenu={route.displayOnMenu}
															isPrivate={route.isPrivate}
															name={subRoute.name}
															icon={route.icon}
															layout={route.layout}
														/>
													}
												/>
											);
										});

										if (route.path.replaceAll("/", "").length) itemRoutes.unshift(routeComponent);

										return itemRoutes;
									}
								})}
							</Routes>
						</BrowserRouter>
					</MenuProvider>
				</ThemeProvider>
			</TranslateProvider>
		</AuthProvider>
	);
};

export default App;
