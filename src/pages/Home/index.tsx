import styled from 'styled-components'
import { useEffect } from 'react';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

function Home() {
	useEffect(() => {
		document.title = 'Home - ft_transcendence';
	}, []);

  return (
    <Container>
		Welcome to our ft_transcendence !
    </Container>
  );
}

export default Home;
