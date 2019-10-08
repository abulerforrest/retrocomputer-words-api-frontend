import * as React from "react";

import { observer } from "mobx-react";

import RandomWord from "../atoms/RandomWord/RandomWord";
import Typography from "../atoms/Typography/Typography";

import {
	IMainPageController
} from "../../interfaces/controllers/MainPageController";

import {
	GithubIcon,
	LinkedInIcon
} from "../atoms/Icons/Icons";

import styled from "styled-components";

import profilePic from "../../assets/a.png";

import { Link } from "../atoms/Link";

import { defaultTheme } from "../../themes/theme";

interface IMainPageProps {
	controller: IMainPageController
}

const DescTextContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	user-select: none;
`;

const Root = styled.div`
	display: flex;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const SocialIcons = styled.div`
	display: flex;
	align-content: flex-start;
	justify-content: space-between;
	top: 20px;
	width: 95px;
	position: fixed;
`;

const BySection = styled.div`
	display: flex;
	margin-top: 20px;
	margin-bottom: 10px;
	user-select: none;
`;

const ProfilePic = styled.span`
	width: 50px;
	height: 50px;
	min-height: 50px;
	border-radius: 50%;
	background-size: 50px;
	border: 2px solid white;
	background-repeat: no-repeat;
	background-color: rgba(0,212,255,1);
	background-image: url(${profilePic});
		&:hover {
			animation: ${props => props.theme.animationRotate360};
		}
`;

@observer
class MainPage extends React.Component<
	IMainPageProps
> {

	render() {

		const { controller } = this.props;

		return (
				<Root>
					<SocialIcons>

						<Link href="https://github.com/abulerforrest">
							<GithubIcon />
						</Link>
						<Link href="https://www.linkedin.com/in/abulerforrest">
							<LinkedInIcon />
						</Link>

					</SocialIcons>
					
					<RandomWord controller={controller} />

					<DescTextContainer>
						<Typography
							fontSize={19}
							margin="20px 0 0 0"
			
						>
							The random word is powered by the Retro Computer Words API
						</Typography>

						<Typography
							fontSize={15}
						>
							A collection of words from various 80's computer sources ({controller.total}) words
						</Typography>
					</DescTextContainer>

						<Link
								href="http://retrocomputerwordsapi.alexdev.se"
								fontSize={29}
								margin="80px 0 30px 0"
								fontFamily={defaultTheme.secondaryFont}
							>
								retrocomputerwordsapi.alexdev.se
						</Link>
						
						<BySection>
							<Typography fontSize={15}>
								maintained by 
							</Typography>

							<Link
								href="https://github.com/abulerforrest"
								fontSize={15}
								margin="0 0 0 2px"
							>
								abulerforrest
							</Link>
						</BySection>

						<ProfilePic />
				</Root>
		);
	}
}

export default MainPage;