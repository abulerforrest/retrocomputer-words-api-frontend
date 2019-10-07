import {
	IWordService
} from "../interfaces/services/WordService";

import axios from 'axios';

import { IWord } from "../interfaces/Word";

export class WordService implements IWordService {

	public async getRandomWord() : Promise<IWord> {

		const result = axios.post(process.env.REACT_APP_API_SIGNIN!,
			{ 
				username: "free",
				password: "access"
			})
		.then(res => {

			const token = res.data.token;

			return axios.get(process.env.REACT_APP_API_GET!, {
				headers: { Authorization: "Bearer " + token }
			}).then((res) => {
				const randomWord: IWord = res.data.word[0];
				return randomWord;
			})
		});

		return result;

	}

}