import styled from 'styled-components'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 30px;
`

const Title = styled.h1`
	font-size: 60px;
	font-weight: 300;
`

const SubTitle = styled.p`
	font-size: 30px;
	font-weight: 300;
	margin-bottom: 60px;
`

const StyledLink = styled(Link)`
	font-size: 40px;
	padding: 5px 20px;
	border: 2px solid white;
	border-radius: 50px;
	text-shadow: 2px 2px 4px black;
	background: linear-gradient(0.5turn, transparent, darkgrey);
	&:hover{background: linear-gradient(0turn, transparent, grey);}
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
