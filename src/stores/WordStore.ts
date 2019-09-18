import { RootStore } from "./RootStore";

export class WordStore {

	private readonly rootStore: RootStore;
	private readonly words!: string[];

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	public async getWords() {
		await this.rootStore.services.wordService!.getWords();
	}

}
