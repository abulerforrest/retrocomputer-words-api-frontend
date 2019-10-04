import React from 'react';

import {
	createGlobalStyle, ThemeProvider
} from "styled-components";

import MainPage from "./components/pages/MainPage";

import {
	MainPageController
} from "./controllers/pages/MainPageController";

import { RootStore } from './stores/RootStore';

import {
	IServices
} from './interfaces/allServices';

import {
	WordService
} from './services/WordService';

import { defaultTheme } from './themes/theme';

const GlobalStyle: any = createGlobalStyle`
	body {
		margin: 0;
		font-weight: bold;
		letter-spacing: 1;
		white-space: nowrap;
		background-color: #000000;
		text-transform: uppercase;
		text-decoration-color:#EB1296;
		font-family: "Roboto", sans-serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		background-image:
			linear-gradient(
				to right top,
				#000000,
				#020202,
				#050304,
				#070507,
				#090709,
				#090709,
				#090709,
				#090709,
				#070507,
				#050304,
				#020202,
				#000000
			);
	}
`;

const services: Partial<IServices> = {
	wordService: new WordService()
};

const rootStore = new RootStore(services);

const App = () => (
<ThemeProvider theme={defaultTheme}>
	<React.Fragment>		
		<GlobalStyle />
		<MainPage
			controller={new MainPageController(rootStore)}
		/>
	</React.Fragment>
</ThemeProvider>
);

export default App;