import React from 'react';

import "./App.scss";

import MainPage from "./components/pages/MainPage";

import {
	MainPageController
} from "./controllers/pages/MainPageController";

import { RootStore } from './stores/RootStore';

import { IServices } from './interfaces/allServices';
import { WordService } from './services/WordService';

const services : Partial<IServices> = {
	wordService: new WordService()
};

const rootStore = new RootStore(services);

function App() {
  return (
    <MainPage controller={new MainPageController(rootStore)} />
  );
}

export default App;