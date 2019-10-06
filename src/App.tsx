import React from 'react';

import {
	createGlobalStyle,
	ThemeProvider
} from "styled-components";

import "./assets/fonts/roboto.ttf";

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

type IGlobalStyleProps = {
	margin: string
	fontFamily: string
	fontWeight: string
	whiteSpace: string
	textTransform: string
	primaryBGColor: string
	backgroundImage: string
	letterSpacing: string
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`

	@font-face {
		font-family: "Roboto";
		src: local('Roboto');		
	}
	body {
		margin: ${p => p.margin}
		font-weight: ${p => p.fontWeight}
		letter-spacing: ${p => p.letterSpacing}
		white-space: ${p => p.whiteSpace};
		text-transform: ${p => p.textTransform};
		font-family: ${p => p.fontFamily};
		background-color: ${p => p.primaryBGColor};
		background-image: ${p => p.backgroundImage};
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}
`;

const services: Partial<IServices> = {
	wordService: new WordService()
};

const rootStore = new RootStore(services);

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<React.Fragment>		
			<GlobalStyle
				margin={defaultTheme.defaultMargin}
				fontFamily={defaultTheme.primaryFont}
				backgroundImage={defaultTheme.backgroundImage}
				textTransform={defaultTheme.defaultTextTransform}
				primaryBGColor={defaultTheme.primaryBGColor}
				whiteSpace={defaultTheme.defaultWhiteSpace}
				fontWeight={defaultTheme.defaultFontWeight}
				letterSpacing={defaultTheme.defaultLetterSpacing}
			/>
			<MainPage
				controller={new MainPageController(rootStore)}
			/>
		</React.Fragment>
	</ThemeProvider>
);

export default App;