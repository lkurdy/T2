import styled from 'styled-components'
import { useEffect } from 'react';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

function Game() {
	useEffect(() => {
		document.title = 'Game - ft_transcendence';
	}, []);

  return (
    <Container>
		Game
    </Container>
  );
}

export default Game;
