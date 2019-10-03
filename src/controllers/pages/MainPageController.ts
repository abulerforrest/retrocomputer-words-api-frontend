import { observable } from "mobx"

import {
	IMainPageController
} from "../../interfaces/controllers/MainPageController";

import { RootStore } from "../../stores/RootStore";

export class MainPageController implements IMainPageController {

	private readonly rootStore: RootStore;

	@observable public error: boolean = false;
	@observable public loading: boolean = false;
	
	@observable public randomWord: string = "";

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;

		this.load();
	}

	private async load() : Promise<void> {

		this.loading = true;

		try {
			const randomWordModel = await this.rootStore.wordStore.getRandomWord();
			this.randomWord = randomWordModel.word;
		}
		catch(error) {
			console.error("Wasn't able to fetch the word ;(");
			this.error = true;
		}
		finally {
			this.loading = false;
		}
	}

}