import styled from 'styled-components'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

const Title = styled.h1`
	font-size: 60px;
	font-weight: 300;
	margin-top: -10px
`

const SubTitle = styled.h2`
	font-size: 30px;
	font-weight: 300;
	margin-bottom: 50px;
`

const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	font-size: 40px;
	padding: 5px 20px;
	border: 2px solid white;
	border-radius: 50px;
`;

function Home() {
	useEffect(() => {
		document.title = 'Home - ft_transcendence';
	}, []);

return (
	<Container>
		<Title>Welcome to ft_transcendence!</Title>
		<SubTitle>ft_transcendence offers a classic, multiplayer gaming experience with a modern twist.<br />
		Challenge your friends in 1v1 Pong duels while chatting with them using our interactive chat system.<br />
		Immerse yourself in the nostalgia of an iconic game while enjoying thrilling competitive moments.<br />
		Join us and let the games begin!</SubTitle>
		<StyledLink to="/game">Play Now</StyledLink>
	</Container>
	);
}

export default Home;
