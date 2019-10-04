import * as React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";

import {
	IMainPageController
} from "../../../interfaces/controllers/MainPageController";

import { Button } from "../Button";

import styled from "styled-components";

const copy = require('clipboard-copy');

const ErrorMsg = styled.div`
	animation: ${props => props.theme.animationRotate90};
`;

const Spinner = styled.span`
	margin-bottom: 30px;
	width: ${props => props.theme.spinnerDefaultWH};
	height: ${props => props.theme.spinnerDefaultWH};
	border-radius: 50%;
	border: ${props => props.theme.spinnerBorder};
	border-top: ${props => props.theme.spinnerBorderTop};
	animation: ${props => props.theme.animationSpinner};
`;

const NeonText = styled.div`
	height: 150px;
	margin-top: 80px;
	animation: ${props => props.theme.animationNeon};
`;

const WordContainer = styled.div`
	display: flex;
	margin-top: 50px;
	user-select: none;
	align-items: center;
	flex-direction: column;
`;

interface IRandomWordProps {
	controller: IMainPageController
}

@observer
class RandomWord extends React.Component<IRandomWordProps> {

	private readonly controller: IMainPageController;
	@observable copiedConfirmText: string = "";

	constructor(props: any) {
		super(props);

		this.controller = props.controller;
	}

	copyText = () => {
		const { controller } = this.props;

		// copy text to clipboard
		copy(controller.randomWord);
		
		this.copiedConfirmText = `Copied ${controller.randomWord} to clipboard!`;
	}

	renderWord() {
		if(this.controller.error) {
			return (
				<ErrorMsg>
					;(
				</ErrorMsg>
			);		
		}
		else if(this.controller.loading) {
			return <Spinner />;
		}
		else {
			if(this.controller.randomWord !== "") { 
				return (
					<WordContainer>
						<NeonText>
							{ this.controller.randomWord }
						</NeonText>
						<Button
							onClick={this.copyText}
							label="copy to clipboard"
							copiedConfirm={this.copiedConfirmText}
						/>
					</WordContainer>
				);
			}
		}
	}

	render() {
		return this.renderWord();
	}
}

export default RandomWord;