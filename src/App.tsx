import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrmRoute from "./components/CrmRoute";
import routes from "./config/routes";
import GlobalStyles from "./styles/globals";
import { TranslateProvider } from "./contexts/TranslateContext";
import { ThemeProvider } from "styled-components";
import LightTheme from "./styles/themes/LightTheme";
import { MenuProvider } from "./contexts/MenuContext";
import "devextreme/dist/css/dx.light.css";

const App: FC = () => {
	return (
		<TranslateProvider>
			<ThemeProvider theme={LightTheme}>
				<MenuProvider>
					<GlobalStyles />
					<BrowserRouter>
						<Routes>
							{routes.map((route, index) => (
								<Route path={route.path} key={index} element={<CrmRoute {...route} />} />
							))}
						</Routes>
					</BrowserRouter>
				</MenuProvider>
			</ThemeProvider>
		</TranslateProvider>
	);
};

export default App;
