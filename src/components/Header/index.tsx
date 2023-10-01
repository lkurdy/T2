import styled from 'styled-components';
import BtnHome from '../../assets/btn-home.png';
import BtnPlay from '../../assets/btn-play.png';
import BtnChat from '../../assets/btn-chat.png';
import BtnProfile from '../../assets/btn-profile.png';
import { Link } from 'react-router-dom';

const Container = styled.header`
	display: flex;
	justify-content: flex-start;
`;

const HomeLogo = styled.img`
	height: 160px;
	margin-top: -50px;
	transition: height 0.2s;
	&:hover {
		height: 165px;
		}
`;

const NavContent = styled.nav`
	display: flex;
	justify-content: flex-start;
	margin-left: auto;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-right: 25px;
	margin: 100px 25px;
`;

const NavLogo = styled.img`
	height: 60px;
	transition: height 0.2s;
	&:hover {
		height: 65px;
		}
`;

function Header() {
	return (
		<Container>
			<StyledLink to="/">
				<HomeLogo src={BtnHome} />
			</StyledLink>
			<NavContent>
				<StyledLink to="/game">
					<NavLogo src={BtnPlay} />
					Play
				</StyledLink>
				<StyledLink to="/chat">
					<NavLogo src={BtnChat} />
					Chat
				</StyledLink>
				<StyledLink to="/profile">
					<NavLogo src={BtnProfile} />
					Profile
				</StyledLink>
			</NavContent>
		</Container>
		);
}

export default Header;
