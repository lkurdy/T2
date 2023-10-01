import { createGlobalStyle } from 'styled-components'
import Background from '../../assets/background.gif'

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'PixelFont';
		src: url('./src/assets/PixelFont.ttf') format('truetype');
	}
	* {
		color: white;
	}
	body {
		background: url(${Background});
		margin: 0;
		font-family: 'PixelFont', sans-serif;
	}`

export default GlobalStyle;
