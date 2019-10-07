import * as React from "react"

import "./default.css";

export const GithubIcon = ({
	style = {},
	width = "40px",
	className = "defaultIconStyle",
	height = "40px",
	preserveAspectRatio="xMidYMid meet",
	viewBox="0 0 510 510",
}): JSX.Element => <svg
	width={width}
	height={height}
	preserveAspectRatio={preserveAspectRatio}
	className={className}
	viewBox={viewBox}
	style={style}
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%">
			<stop offset="0%" style={{stopColor:"rgb(255,82,177)", stopOpacity:1}} />
			<stop offset="100%" style={{stopColor:"rgb(0,128,128)", stopOpacity:1}} />
		</linearGradient>
	</defs>
	<path
		d="M0 255.488c0-34.816 6.826-67.925 20.48-99.328C47.445 92.672 92.672 47.446 156.16 20.48 187.562 6.827 220.672 0 255.488 0s67.925 6.827 99.328 20.48c62.806 26.624 108.032 71.85 135.68 135.68 13.653 32.427 20.48 65.536 20.48 99.328s-6.827 66.902-20.48 99.328c-27.647 64.17-72.874 109.74-135.68 136.704-31.403 13.654-64.512 20.48-99.328 20.48s-67.926-6.826-99.328-20.48C92.672 464.213 47.445 418.645 20.48 354.816 6.827 323.414 0 290.304 0 255.488zm39.935 0c0 48.128 14.336 91.136 43.009 129.024 28.33 37.205 65.365 63.658 111.104 79.36v-40.96c0-20.48 6.827-35.328 20.48-44.545-6.826-.34-14.848-1.535-24.064-3.583-17.408-3.072-32.256-8.533-44.544-16.384-31.061-18.774-46.592-52.736-46.592-101.888 0-25.6 8.533-47.446 25.6-65.536-7.85-20.14-6.997-41.984 2.56-65.536h10.24c3.413 0 7.68.853 12.8 2.56 13.312 4.096 28.16 11.605 44.544 22.527 20.821-5.46 41.301-8.191 61.44-8.191s40.79 2.73 61.952 8.191c13.312-8.874 25.77-15.7 37.376-20.48 10.923-4.095 18.773-5.802 23.552-5.12l6.144.512c9.216 23.553 10.07 45.398 2.56 65.537 17.067 18.09 25.6 39.935 25.6 65.536 0 38.229-9.386 67.072-28.16 86.528-10.24 10.922-23.723 19.456-40.448 25.6-13.995 5.12-29.525 8.362-46.592 9.727 13.995 9.9 20.993 24.747 20.993 44.544v40.96c44.031-15.701 80.383-42.496 109.056-80.384 27.99-37.546 41.984-80.213 41.984-128 0-29.013-5.632-57.002-16.897-83.968-10.922-25.941-26.282-48.81-46.08-68.608-19.114-19.115-41.983-34.304-68.607-45.567-27.307-11.606-55.125-17.409-83.456-17.409-27.99 0-55.98 5.803-83.969 17.409-25.6 10.922-48.469 26.111-68.607 45.567-19.115 19.798-34.475 42.667-46.08 68.608-11.265 26.966-16.897 54.955-16.897 83.968z"
		fill="url(#lgrad)"
	/>
</svg>;

export const LinkedInIcon = ({
	style = {},
	width = "40px",
	className = "defaultIconStyle",
	height = "40px",
	preserveAspectRatio="xMidYMid meet",
	viewBox="0 0 1050 1050"
}): JSX.Element => <svg
	width={width}
	height={height}
	preserveAspectRatio={preserveAspectRatio}
	className={className}
	viewBox={viewBox}
	style={style}
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%">
			<stop offset="0%" style={{stopColor:"rgb(255,82,177)", stopOpacity:1}} />
			<stop offset="100%" style={{stopColor:"rgb(0,128,128)", stopOpacity:1}} />
		</linearGradient>
	</defs>
		<path
			d="M928 1024H96c-51.2 0-96-44.8-96-96V96C0 44.8 44.8 0 96 0h825.6C979.2 0 1024 44.8 1024 96v825.6c0 57.6-44.8 102.4-96 102.4zM262.4 192c-44.8 0-76.8 32-76.8 76.8 0 38.4 25.6 76.8 70.4 76.8 44.8 0 70.4-32 70.4-76.8 6.4-44.8-19.2-76.8-64-76.8zm76.8 198.4H192V832h147.2V390.4zm537.6 192c0-134.4-64-204.8-160-204.8-76.8 0-108.8 44.8-128 70.4v-64H435.2v441.6h147.2V588.8c0-12.8 0-25.6 6.4-32 12.8-25.6 32-51.2 76.8-51.2 51.2 0 70.4 38.4 70.4 96V832h147.2V582.4z"
			fill="url(#lgrad)"
		/>
</svg>;

export const RecycleIcon = ({
	style = {},
	width = "25px",
	className = "defaultIconStyle",
	height = "25px",
	preserveAspectRatio="xMidYMid meet",
	viewBox="0 0 1010 1010",
}): JSX.Element => <svg
	width={width}
	height={height}
	preserveAspectRatio={preserveAspectRatio}
	className={className}
	viewBox={viewBox}
	style={style}
	xmlns="http://www.w3.org/2000/svg"
	xmlnsXlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%">
			<stop offset="0%" style={{stopColor:"rgb(255,82,177)", stopOpacity:1}} />
			<stop offset="100%" style={{stopColor:"rgb(0,128,128)", stopOpacity:1}} />
		</linearGradient>
	</defs>
	<path
		d="M993 512q-12 0-20.5 8t-9.5 20q-4 77-34 148-35 81-97.5 143.5T688 928q-83 36-175.5 36T337 928q-82-34-144.5-96.5T96 688q-35-84-35-176t35-176q35-81 97-143.5T337 96q83-36 175-36 112 0 211 52 58 30 106 77l-118-21q-13-2-23.5 5.5T674 194q-2 13 5.5 24t20.5 13l189 34q13 2 24-5.5t13-20.5l34-189q2-13-5.5-23.5T934 13q-13-2-24 5.5T897 39l-20 113q-56-56-126-93Q640 0 512 0 408 0 313 40q-92 39-162 110-71 71-110 163Q0 408 0 512t41 199q39 92 109 163 72 71 163 110 95 40 199 40 105 0 200-40 92-39 162-110 71-71 110-163 34-80 39-167 1-13-8-22.5t-22-9.5z"
		fill="url(#lgrad)"
	/>
</svg>;