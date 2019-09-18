import { IWordService } from "../interfaces/services/WordService";
import axios from 'axios';

export class WordService implements IWordService {

	public async getWords() : Promise<void> {

/*		axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
		axios.defaults.baseURL ="http://localhost:8080"

		const result = axios.get(`http://localhost:8080`)
		.then(res => {
			const result = res.data;
			console.log(result)
		});
*/
	}

}