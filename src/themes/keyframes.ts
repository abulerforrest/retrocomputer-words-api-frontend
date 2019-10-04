import { keyframes } from "styled-components";

export const rotate90 = keyframes`
	from {
		opacity: 0;
		transform: rotate(0deg);
	}
	to {
		opacity: 1;
		transform: rotate(90deg);
	}
`;

export const fadeOut = keyframes`
	from {
		opacity: 1;
		blur(0);
	}
	to {
		opacity: 2;
		blur(12px);
	}
`;

export const spinner = keyframes`
	from {
		opacity: 0.7;
		transform: rotate(0deg);
	}
	to {
		opacity: 1;
		transform: rotate(360deg);
	}
`;

export const neon = keyframes`
	0% {
		opacity: 0.6;
		filter: blur(12px);
		-webkit-filter: blur(12px);
		text-shadow:
			0 0 10px #fff,
			0 0 20px #fff,
			0 0 30px #fff,
			0 0 40px #FF1177,
			0 0 70px #FF1177,
			0 0 80px #FF1177,
			0 0 100px #FF1177,
			0 0 150px #FF1177;
	}
	2% {
		opacity: 0.8;
	}
	5% {
		opacity: 1;
		filter: blur(0);
		-webkit-filter: blur(0);
	}
	97% {
		opacity: 1;
	}
	98% {
		opacity: 0;
		filter: blur(0);
		-webkit-filter: blur(0);
	}
	99% {
		opacity: 0.8;
		filter: blur(12px);
		-webkit-filter: blur(12px);
	}
	100% {
		opacity: 1;
		text-shadow:
			0 0 5px #fff,
			0 0 10px #fff,
			0 0 15px #fff,
			0 0 20px #00EAFF,
			0 0 35px #00EAFF,
			0 0 40px #00EAFF,
			0 0 50px #00EAFF,
			0 0 75px #00EAFF;
	}
`;