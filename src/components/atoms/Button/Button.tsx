import * as React from "react";

import "./button.scss";
import Typography from "../Typography/Typography";

interface IButtonProps {
	label: string
	copiedConfirm: string
	onClick?: () => void
}

class Button extends React.Component<IButtonProps> {

	render() {

		return (
			<div className="buttonContainer">
				<input
					type="button"
					value="copy to clipboard"
					className="clipboardCopyButton"
					onClick={this.props.onClick}
				/>
				<div className="copiedConfirm">
					<Typography
						fontSize={15}
					>
						{this.props.copiedConfirm}
					</Typography>
				</div>
			</div>
		);
	}
}

export default Button;