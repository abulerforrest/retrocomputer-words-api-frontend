import * as React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";

import {
	IMainPageController
} from "../../../interfaces/controllers/MainPageController";

import "./randomword.scss";

import { Button } from "../Button";

const copy = require('clipboard-copy');

interface IRandomWordProps {
	controller: IMainPageController
}

@observer
class RandomWord extends React.Component<IRandomWordProps> {

	private readonly controller: IMainPageController;
	@observable copiedConfirm: string = "";

	constructor(props: any) {
		super(props);

		this.controller = props.controller;
	}

	copyText = () => {
		console.log("here")
		const { controller } = this.props;

		// copy text to clipboard
		copy(controller.randomWord);
		
		this.copiedConfirm = `Copied ${controller.randomWord} to clipboard!`;
	}

	renderWord() {
		if(this.controller.error) {
			return (
				<div className="error">
					;(
				</div>
			);		
		}
		else if(this.controller.loading) {
			return <div className="spinner" />;
		}
		else {
			if(this.controller.randomWord !== "") { 
				return (
					<div className="wordContainer">
						<div className="randomTextNeon">
							{ this.controller.randomWord }
						</div>
						<Button
							onClick={this.copyText}
							label="copy to clipboard"
							copiedConfirm={this.copiedConfirm}
						/>

					</div>
				);
			}
		}
	}

	render() {
		return this.renderWord();
	}
}

export default RandomWord;