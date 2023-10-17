import styled from 'styled-components';
import BtnHome from '../../assets/btn-home.png';
import BtnPlay from '../../assets/btn-play.png';
import BtnChat from '../../assets/btn-chat.png';
import BtnProfile from '../../assets/btn-profile.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.header`
	display: flex;
	justify-content: flex-start;
`;

const HomeLogo = styled.img`
	height: 160px;
	margin-top: -50px;
`;

const NavContent = styled.nav`
	display: flex;
	justify-content: flex-start;
	margin-left: auto;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-right: 50px;
	margin-top: 100px;
	margin-left: 25px;
`;

const NavLogo = styled.img`
	height: 60px;
	transition: height 0.2s;
	&:hover {height: 70px;}
`;



function Header() {
	const [isLogged, setIsLogged] = useState(false);
	return (
		<Container>
			<StyledLink to="/">
				<HomeLogo src={BtnHome} alt='BtnHome' />
			</StyledLink>
			<NavContent>
				<StyledLink to="/game">
					<NavLogo src={BtnPlay} alt='BtnPlay' />
					Play
				</StyledLink>
				<StyledLink to="/chat">
					<NavLogo src={BtnChat} alt='BtnChat' />
					Chat
				</StyledLink>
				<StyledLink to="/profile">
					<NavLogo src={BtnProfile} alt='BtnProfile' />
					{isLogged ? 'Profile' : 'Login'}
				</StyledLink>
			</NavContent>
		</Container>
		);
}

export default Header;
