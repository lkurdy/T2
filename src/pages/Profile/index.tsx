import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import defaultPic from '../../assets/42png.png';
		import Pong from '../../components/Pong/';


interface MenuProps {
	showMenu: boolean;
}

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

const StyledMenu = styled.div<MenuProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color:rgb(50, 50, 50, 0.5);
	padding: 25px;
	padding-top: 0px;
	border-radius: 10px;
	text-shadow: 2px 2px 9px black;
	z-index: 3;
	display: ${(props) => (props.showMenu ? 'block' : 'none')};
	align-items: center;
	justify-content: center;
`;

const MenuTitle = styled.h1`
	font-size: 30px;
`

const MenuButton = styled.button`
	width: 100%;
	padding: 10px;
	margin-top: 10px;
	font-size: 20px;
	border-radius: 5px;
	cursor: pointer;
	text-shadow: 2px 2px 4px black;
	background: linear-gradient(0.5turn, transparent, dimgrey);
	&:hover{background: linear-gradient(0turn, transparent, dimgrey);}
`;

const PrevLink = styled.button`
	font-size: 18px;
	border-radius: 5px;
	text-shadow: 2px 2px 4px black;
	background: linear-gradient(0.5turn, grey, dimgrey);
	&:hover{background: linear-gradient(0turn, grey, dimgrey);}
	cursor: pointer;
`

const ProfilePic = styled.img`
	height: 60px;
	&:hover {filter: brightness(70%);};
	background-color: white;
`

const Blaze = styled.div`
	font-size: 28px;
	&:hover {filter: brightness(70%);};
`

function Profile() {
	useEffect(() => {
		document.title = 'Profile - ft_transcendence';
	}, []);

	const [showMenu, setShowMenu] = useState(true);
	const navigate = useNavigate();

	const handleModeClick = () => {
		setShowMenu(false);
	};

  return (
    <Container>
		<StyledMenu showMenu={showMenu}>
				<MenuTitle>Profile</MenuTitle>
				<ProfilePic src={defaultPic} alt='defaultPic' />
				<Blaze>Nickname</Blaze>
				<MenuButton onClick={handleModeClick}>Match History</MenuButton>
				<MenuButton onClick={handleModeClick}>Stats</MenuButton>
				<MenuButton onClick={handleModeClick}>Enable 2FA</MenuButton>
				<PrevLink onClick={() => navigate(-1)}>Go Back</PrevLink>
			</StyledMenu>
			{!showMenu && <Pong />}
    </Container>
  );
}

export default Profile;
