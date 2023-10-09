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

const MenuOverlay = styled.div<MenuProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: ${(props) => (props.showMenu ? 'block' : 'none')};
`;

const StyledMenu = styled.div<MenuProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color:rgb(100, 100, 100, 0.7);
  padding: 20px;
  border-radius: 10px;
  text-shadow: 2px 2px 4px black;
  z-index: 3;
  display: ${(props) => (props.showMenu ? 'block' : 'none')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MenuTitle = styled.h1`
	font-size: 30px;
`

const MenuButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-shadow: 2px 2px 4px black;
  background: linear-gradient(0.5turn, darkgrey, grey);
  &:hover {background: linear-gradient(0turn, darkgrey, grey);}
`;

const PrevLink = styled.button`
	text-shadow: 2px 2px 4px black;
	background: linear-gradient(0.5turn, darkgrey, grey);
	&:hover{background: linear-gradient(0turn, darkgrey, grey);}
`

const Description = styled.p``

function Game() {
	useEffect(() => {
		document.title = 'Game - ft_transcendence';
	}, []);

	const [showMenu, setShowMenu] = useState(true);
	const navigate = useNavigate();

  return (
    <Container>
		<MenuOverlay showMenu={showMenu}></MenuOverlay>
		<StyledMenu showMenu={showMenu}>
			<MenuTitle>Choose Your Game Mode</MenuTitle>
			<MenuButton onClick={() => setShowMenu(false)}>Online Mode</MenuButton>
			<MenuButton onClick={() => setShowMenu(false)}>Friend Mode</MenuButton>
			<MenuButton onClick={() => setShowMenu(false)}>Local Mode</MenuButton>
			<MenuButton onClick={() => setShowMenu(false)}>Bot Mode</MenuButton>
			<PrevLink onClick={() => navigate(-1)}>x</PrevLink>
			<Description>Play against opponents from around the world with a matchmaking system, test your skills, and show who's the best in exciting online Pong duels.</Description>
			<Description>Challenge your friends to an epic showdown in Friend Mode. Invite your pals for a thrilling game of Pong, where you can settle old scores and have a blast in intense one-on-one battles.</Description>
			<Description>Share fun face-to-face moments with a friend on the same computer, engaging in intense Pong battles where every move counts.</Description>
			<Description>Hone your skills and perfect your game by playing against a bot, a virtual opponent always ready to challenge you. An ideal way to practice and become a true Pong master.</Description>
		</StyledMenu>
		<Pong />
    </Container>
  );
}

export default Game;
