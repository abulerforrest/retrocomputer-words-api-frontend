import * as React from "react";
import styled from "styled-components";

type TypographyProps = {
	children?: React.ReactNode
	margin?: string
	fontSize?: number
	className?: string
}

const Root = styled.div`
	display: flex;
	font-family: ${props => props.theme.primaryFont};
	text-transform: uppercase;
	font-size: 20px;
	color: white;
`;

class Typography extends React.Component<TypographyProps> {

	render() {

		const {
			margin,
			fontSize,
			children
		} = this.props;

		return (
			<Root
				style={{margin: margin, fontSize: fontSize}}
			>
				{children}
			</Root>
		);
	}
}

export default Typography;