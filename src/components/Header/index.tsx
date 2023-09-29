import React from 'react';
import styled from 'styled-components'
import HeaderLogoName from '../../assets/logo42.png'
import HeaderLogoPong from '../../assets/logoPong.png'
import BtnPlay from '../../assets/btn-play.png'
import BtnProfile from '../../assets/btn-profile.jpg'

import { Link } from 'react-router-dom'

const Container = styled.header`
	display: flex
	justify-content: flex-start;`

const HeaderPong = styled.img`
	height: 180px;
	margin: 25px;`

const HeaderName = styled.img`
	height: 60px;
	position: absolute;
	top: 133px;
	left: 115px;`

const NavContent = styled.nav`
	display: flex;
	justify-content: flex-end;`

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	margin: -125px 10px;
	padding-right: 25px;
	transition: font-size 0.2s;
		&:hover{font-size: 20px}`

const HeaderLogo = styled.img`
	height: 60px;`

function Header()
{
	return (<Container>
				<StyledLink to="/">
					<HeaderPong src={HeaderLogoPong}/>
					<HeaderName src={HeaderLogoName} />
				</StyledLink>
				<NavContent>
					<StyledLink to="/game">
						<HeaderLogo src={BtnPlay} />Play
					</StyledLink>
					<StyledLink to="/chat">Chat</StyledLink>
					<StyledLink to="/game">
						<HeaderLogo src={BtnProfile} />Profile
					</StyledLink>
				</NavContent>
			</Container>);
}

export default Header;
