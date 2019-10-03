import { IWord } from "../interfaces/Word";

export class WordModel {

	_id: string = "";
	word: string = "";

	constructor(word?: IWord) {

		if(word) {
			this._id = word._id;
			this.word = word.word;
			}
		}
	
}
