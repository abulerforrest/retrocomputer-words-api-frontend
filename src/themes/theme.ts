import { css } from "styled-components";
import * as keyframeAnimations from "./keyframes";

export const defaultTheme = {

	// Keyframe Animations
	animationSpinner: css`${keyframeAnimations.spinner} 1s linear infinite`,
	animationFadeOut: css`${keyframeAnimations.fadeOut} 1s ease-in forwards`,
	animationNeon: css`${keyframeAnimations.neon} 5s ease-in-out infinite alternate`,
	animationError: css`${keyframeAnimations.neonError} 5s ease-in-out infinite alternate`,
	animationRotate360: css`${keyframeAnimations.rotate360} 1s linear infinite`,

	// Default
	primaryColor: "#ffffff",
	primaryBGColor: "#000000",
	primaryFont: `"Roboto", sans-serif`,
	secondaryFont: `Squada One`,
	defaultTextTransform: "uppercase",
	defaultLetterSpacing: "1px",
	defaultMargin: "0",
	defaultFontWeight: "bold", 
	defaultWhiteSpace: "nowrap",

	// Button
	buttonFont: "arial",
	buttonFontSize: "15px",
	buttonPadding: "16px 31px",

	backgroundImage: `
	linear-gradient(
		to right top,
		#000000,
		#020202,
		#050304,
		#070507,
		#090709,
		#090709,
		#090709,
		#090709,
		#070507,
		#050304,
		#020202,
		#000000
	)`,
	
	// Spinner
	spinnerDefaultWH: "30px",
	spinnerBorder: "8px solid #ff00ee",
	spinnerBorderTop: "8px solid #e475df"
};