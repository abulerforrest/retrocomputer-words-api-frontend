import * as React from "react";
import "./mainpage.scss";

import RandomWord from "../atoms/RandomWord/RandomWord";
import Typography from "../atoms/Typography/Typography";

import {
	MainPageController
} from "../../controllers/pages/MainPageController";

import {
	IMainPageController
} from "../../interfaces/controllers/MainPageController";

interface IMainPageProps {
	controller: IMainPageController
}

class MainPage extends React.Component<
	IMainPageProps
> {
	render() {
		return (
			<div>
				<header className="App-root">
					<div className="randomTextNeon">
						<RandomWord />
						
					</div>
					<div className={"descriptionTextContainer"}>
						<Typography
							margin={"90px 0 -38px 0"}
						>Daily Random Word is powered by the Retro Computer Word API</Typography>
						<Typography fontSize={15}>A collection of words from various 80's computer magazines (14474) words</Typography>
						<Typography fontSize={15}>The api is free to use for your project</Typography>
						<Typography fontSize={20} margin={"-35px 0 0 0"}>Get an api key below</Typography>
						<Typography fontSize={29}>
							<a href="" className="link">
								ALEXDEV.SE/RETROCOMPUTERWORDSAPI
							</a>
						</Typography>
					</div>
				</header>

			</div>);
	}
}

export default MainPage;