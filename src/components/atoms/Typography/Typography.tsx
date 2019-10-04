import * as React from "react";
import styled from "styled-components";

type TypographyProps = {
	children?: React.ReactNode
	margin?: string
	fontSize?: number
	className?: string
}

const Root = styled.div`
	display: flex;
	text-decoration: none;
	color: ${props => props.theme.primaryColor};
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
				style={{margin: margin, fontSize: fontSize }}
			>
				{children}
			</Root>
		);
	}
}

export default Typography;