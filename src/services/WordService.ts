import {
	IWordService
} from "../interfaces/services/WordService";

import axios from 'axios';

import { IWord } from "../interfaces/Word";

const defaultHeaders = {
	"Content-Type": "application/x-www-form-urlencoded"
}
const userCredentials = {
	username: "free",
	password: "access"
}

export class WordService implements IWordService {

	public async getRandomWord() : Promise<IWord> {

		const result = axios.post(process.env.REACT_APP_API_SIGNIN!,
		{
			headers: {
				...defaultHeaders
			},
			...userCredentials
		})
		.then(res => {

			const token = res.data.token;

			return axios.get(process.env.REACT_APP_API_GET!, {
				headers: {
					Authorization: "Bearer " + token,
					...defaultHeaders
				}
			}).then((res) => {
				const randomWord: IWord = res.data.word[0];
				return randomWord;
			});
		});

		return result;

	}

	public async getTotalWordsCount() : Promise<number> {

		const result = axios.post(process.env.REACT_APP_API_SIGNIN!,
		{
			headers: {
				...defaultHeaders
			},
			...userCredentials
		})
		.then(res => {

			const token = res.data.token;

			return axios.get(process.env.REACT_APP_API_COUNT!, {
				headers: {
					Authorization: "Bearer " + token,
					...defaultHeaders
				}
			}).then((res) => {
				return res.data.count;
			});
		});

		return result;

	}

}