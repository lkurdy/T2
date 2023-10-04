import styled from 'styled-components'
import { useEffect } from 'react';
import Pong from '../../components/Pong/';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;`

function Game() {
	useEffect(() => {
		document.title = 'Game - ft_transcendence';
	}, []);

  return (
    <Container>
		<Pong />
    </Container>
  );
}

export default Game;
