import * as React from "react";
import styled from "styled-components";
import Typography from "../Typography/Typography";

type TypographyProps = {
	children?: React.ReactNode
	fontFamily?: string
	fontSize?: number
	margin?: string
	href: string
}

const Root = styled.div`
	display: flex;
	user-select: none;
`;

 const StyledLink = styled.a`
	text-decoration: none;
	color: ${props => props.theme.primaryColor};
	margin: 0;
	padding: 0;


`

class Link extends React.Component<TypographyProps> {

	render() {

		const {
			margin,
			fontSize,
			href,
			fontFamily,
			children
		} = this.props;

		return (
			<Root>
				<StyledLink href={href} style={{margin: margin, fontSize: fontSize, fontFamily: fontFamily}}>
					{children}
				</StyledLink>
			</Root>
		);
	}
}

export default Link;