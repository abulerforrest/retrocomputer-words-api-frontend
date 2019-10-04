import * as React from "react";

import Typography from "../Typography/Typography";

import styled from "styled-components";

interface IButtonProps {
	label: string
	copiedConfirm: string
	onClick?: () => void
}

const ButtonContainer = styled.div`
	display: flex;
	margin-top: -50px;
	display: flex;
	width: 500px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const CopiedConfirm = styled.div`
	margin-top: 50px;
	position: fixed;
`;

const ClipBoardCopyButton = styled.input`
	top: 200px;
	outline: 0;
	background-color: transparent;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:24px;
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
	display:inline-block;
	cursor: pointer;
	color: #fff;
	font-family:Arial;
	font-size:15px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 0px 0px #ffffff;
	font-weight: bold;
	width: 200px;
	margin: 50px;
`;

class Button extends React.Component<IButtonProps> {

	render() {

		return (
			<ButtonContainer>
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