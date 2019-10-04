import { css } from "styled-components";
import * as keyframeAnimations from "./keyframes";

export const defaultTheme = {

	animationSpinner: css`${keyframeAnimations.spinner} 1s linear infinite`,
	animationFadeOut: css`${keyframeAnimations.fadeOut} 1s ease-in forwards`,
	animationRotate90: css`${keyframeAnimations.rotate90} 1s ease-in forwards`,
	animationNeon: css`${keyframeAnimations.neon} 5s ease-in-out infinite alternate`,

	primaryColor: "#ffffff",
	primaryFont: `"Roboto", sans-serif`,
	secondaryFont: `"Squada One", cursive`,

	// Spinner
	spinnerDefaultWH: "30px",
	spinnerBorder: "8px solid #ff00ee",
	spinnerBorderTop: "8px solid #e475df"
};