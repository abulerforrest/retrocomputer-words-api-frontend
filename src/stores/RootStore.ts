import { IServices } from "../interfaces/allServices";
import { WordStore } from "./WordStore";

export class RootStore {

	public readonly services: Partial<IServices>;
	public readonly wordStore: WordStore;

	constructor(services: Partial<IServices>) {
		this.services = services;
		this.wordStore = new WordStore(this);
	}

}