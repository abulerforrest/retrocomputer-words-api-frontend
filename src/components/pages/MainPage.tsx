import * as React from "react";

import { observer } from "mobx-react";

import "./mainpage.scss";

import RandomWord from "../atoms/RandomWord/RandomWord";
import Typography from "../atoms/Typography/Typography";

import {
	IMainPageController
} from "../../interfaces/controllers/MainPageController";

import {
	GithubIcon,
	LinkedInIcon
} from "../atoms/Icons/Icons";

interface IMainPageProps {
	controller: IMainPageController
}

@observer
class MainPage extends React.Component<
	IMainPageProps
> {

	render() {

		const { controller } = this.props;

		return (
			<div>
				<header className="App-root">
					<div className="socialIcons">

						<a href="https://github.com/abulerforrest">
							<GithubIcon />
						</a>
						<a href="https://www.linkedin.com/in/abulerforrest">
							<LinkedInIcon />
						</a>

					</div>
					
					<RandomWord controller={controller} />

					<div
						className={"descriptionTextContainer"}
					>
						<Typography
							margin={"90px 0 -38px 0"}
						>
							The random word is powered by the Retro Computer Words API
						</Typography>

						<Typography
							fontSize={15}
						>
							A collection of words from various 80's computer sources (14474) words
						</Typography>
					
						<Typography
							fontSize={29}
						>
							<a href="" className="link">
								ALEXDEV.SE/RETROCOMPUTERWORDSAPI
							</a>
						</Typography>

						<Typography
							fontSize={15}
						>
							maintained by <a href="https://github.com/abulerforrest">abulerforrest</a>
						</Typography>
						<span className="profilePic" />
					</div>
				</header>
			</div>
		);
	}
}

export default MainPage;