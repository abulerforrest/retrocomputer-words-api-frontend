import * as React from "react";
import "./typography.scss";

type TypographyProps = {
	children?: React.ReactNode
	margin?: string
	fontSize?: number
	className?: string
}

class Typography extends React.Component<TypographyProps> {

	render() {

		const {
			margin,
			fontSize,
			className,
			children
		} = this.props;

		return (
			<div
				className="Typography-root"
				style={{margin: margin, fontSize: fontSize}}
			>
				<p>
					{children}
				</p>
			</div>
		);
	}
}

export default Typography;