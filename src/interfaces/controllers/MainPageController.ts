export interface IMainPageController {
	randomWord: string
	total: string
	error: boolean
	loading: boolean
	getNewRandomWord: () => void
}