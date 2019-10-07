import * as React from "react";

import Typography from "../Typography/Typography";

import styled from "styled-components";

type IButtonProps = {
	label: string
	margin?: string
	copiedConfirm: string
	onClick?: () => void
}

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const CopiedConfirm = styled.span`
	display: flex;
	margin-top: 15px;
	padding-top: 60px;
	position: absolute;
`;

const ClipBoardCopyButton = styled.input`
	outline: 0;
	border-radius: 24px;
	z-index: 1;
	background-image:
		linear-gradient(to right top,
		#dd248d,
		#e4349b,
		#eb41a8,
		#f14eb6,
		#f75ac4,
		#e475df,
		#cf8cf3,
		#b9a0ff,
		#7ebeff,
		#09d8ff,
		#00eeff,
		#00fffe);

	color: #ffffff;
	border: none;
	cursor: pointer;
	font-family: ${props => props.theme.buttonFont};
	font-size: ${props => props.theme.buttonFontSize};
	padding: ${props => props.theme.buttonPadding};
	text-decoration: none;
	text-shadow: 0px 0px 0px ${props => props.theme.primaryColor};
	font-weight: bold;
	width: 200px;
`;

class Button extends React.Component<IButtonProps> {

	render() {

		const { margin } = this.props;

		return (
			<ButtonContainer style={{margin: margin}}>
				<ClipBoardCopyButton
					type="button"
					value="copy to clipboard"
					className="clipboardCopyButton"
					onClick={this.props.onClick}
				/>
				<CopiedConfirm>
					<Typography
						fontSize={15}
					>
						{this.props.copiedConfirm}
					</Typography>
				</CopiedConfirm>
			</ButtonContainer>
		);
	}
}

export default Button;