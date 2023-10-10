import { useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pong from '../../components/Pong/';
import styled from 'styled-components'

interface MenuProps {
	showMenu: boolean;
}

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;`

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
	background: linear-gradient(0.5turn, transparent, darkgrey);
	&:hover{background: linear-gradient(0turn, transparent, grey);}
`;

const Description = styled.p`
	font-size: 20px;
`

const PrevLink = styled.button`
	font-size: 18px;
	border-radius: 5px;
	text-shadow: 2px 2px 4px black;
	background: linear-gradient(0.5turn, darkgrey, grey);
	&:hover{background: linear-gradient(0turn, darkgrey, dimgrey);}
	cursor: pointer;
`

function Game() {
	useEffect(() => {
		document.title = 'Game - ft_transcendence';
	}, []);

	const [showMenu, setShowMenu] = useState(true);
	const navigate = useNavigate();

	const handleModeClick = () => {
		setShowMenu(false);
	};

	return (
		<Container>
			<StyledMenu showMenu={showMenu}>
				<MenuTitle>Choose Your Game Mode</MenuTitle>
				<MenuButton onClick={handleModeClick}>Online Mode</MenuButton>
				<Description>Play against opponents from around the world with a matchmaking system,<br />test your skills, and show who's the best in exciting online Pong duels.</Description>
				<MenuButton onClick={handleModeClick}>Friend Mode</MenuButton>
				<Description>Challenge your friends to an epic showdown in Friend Mode. Invite your pals for a thrilling game of Pong, where you can settle old scores and have a blast in intense one-on-one battles.</Description>
				<MenuButton onClick={handleModeClick}>Local Mode</MenuButton>
				<Description>Share fun face-to-face moments with a friend on the same computer,<br />engaging in intense Pong battles where every move counts.</Description>
				<MenuButton onClick={handleModeClick}>Bot Mode</MenuButton>
				<Description>Hone your skills and perfect your game by playing against a bot, a virtual opponent always ready to challenge you. An ideal way to practice and become a true Pong master.</Description>
				<PrevLink onClick={() => navigate(-1)}>Go Back</PrevLink>
			</StyledMenu>
			{!showMenu && <Pong />}
		</Container>
	);
}

export default Game;
