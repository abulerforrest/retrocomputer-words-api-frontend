import { RootStore } from "./RootStore";
import { WordModel } from "../models/WordModel";


export class WordStore {

	private readonly rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	public async getRandomWord(): Promise<WordModel> {
		const getRandomWord = await this.rootStore.services.wordService!.getRandomWord();

		const wordModel = new WordModel(getRandomWord);
		
		return wordModel;
	}

}