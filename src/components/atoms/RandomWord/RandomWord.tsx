import * as React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";

import {
	IMainPageController
} from "../../../interfaces/controllers/MainPageController";

import { Button } from "../Button";

import styled from "styled-components";

import copy from "clipboard-copy";

import { RecycleIcon } from "../Icons";

const ErrorMsg = styled.div`
	height: 150px;
	margin-left: -56px;
	margin-top: 80px;
	user-select: none;
	font-size: calc(60px + 2vmin);
	transform: rotate(90deg);
	color: ${props => props.theme.primaryColor};
	animation: ${props => props.theme.animationError};
`;

const Spinner = styled.span`
	margin: 150px;
	border-radius: 50%;
	border: ${props => props.theme.spinnerBorder};
	border-top: ${props => props.theme.spinnerBorderTop};
	width: ${props => props.theme.spinnerDefaultWH};
	height: ${props => props.theme.spinnerDefaultWH};
	animation: ${props => props.theme.animationSpinner};
`;

const NeonText = styled.div`
	height: 150px;
	margin-top: 80px;
	font-size: calc(60px + 2vmin);
	color: ${props => props.theme.primaryColor};
	animation: ${props => props.theme.animationNeon};
`;

const WordContainer = styled.div`
	display: flex;
	margin-top: 50px;
	user-select: none;
	align-items: center;
	flex-direction: column;
`;

const Recycle = styled.div`
	cursor: pointer;
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

	copyText = () : void => {
		const { controller } = this.props;

		// copy text to clipboard
		copy(controller.randomWord);
		
		this.copiedConfirmText = `Copied ${controller.randomWord} to clipboard!`;
	}

	getNewRandomWord() : void {
		this.controller.getNewRandomWord();
		this.copiedConfirmText = "";
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
							margin="0 0 50px 0"
							onClick={this.copyText}
							label="copy to clipboard"
							copiedConfirm={this.copiedConfirmText}
						/>
						<Recycle onClick={() => this.getNewRandomWord()}>
							<RecycleIcon />
						</Recycle>
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