import * as React from "react";
import styled from "styled-components";

type TypographyProps = {
	children?: React.ReactNode
	fontSize?: number
	fontFamily?: string
	margin?: string
	href: string
}

 const StyledLink = styled.a`
	display: flex;
	text-decoration: none;
	color: ${props => props.theme.primaryColor};
`;

class Link extends React.Component<TypographyProps> {
	render() {

		const {
			href,
			margin,
			children,
			fontSize,
			fontFamily
		} = this.props;

		return (
			<StyledLink
				href={href}
				style={{margin: margin, fontSize: fontSize, fontFamily: fontFamily}}
			>
				{children}
			</StyledLink>
		);
	}
}

export default Link;