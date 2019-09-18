import { IMainPageController } from "../../interfaces/controllers/MainPageController";

import { RootStore } from "../../stores/RootStore";
import { WordStore } from "../../stores/WordStore";

export class MainPageController implements IMainPageController {

	private readonly rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;

		this.load();
	}

	private async load() : Promise<void> {
		this.rootStore.wordStore.getWords();
	}

}