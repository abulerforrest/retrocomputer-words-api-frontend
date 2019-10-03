import {
	IWordService
} from "../interfaces/services/WordService";

import axios from 'axios';

import { IWord } from "../interfaces/Word";

export class WordService implements IWordService {

	public async getRandomWord() : Promise<IWord> {

		axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

		const result = axios.get(process.env.REACT_APP_API_ENDPOINT!)
		.then(res => {
			const randomWord: IWord = res.data.word[0];
			return randomWord;
		});

		return result;

	}

}