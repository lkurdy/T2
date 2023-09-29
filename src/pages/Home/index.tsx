import styled from 'styled-components'

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

function Home() {
  return (
    <Container>
		Welcome to our transcendence !
    </Container>
  );
}

export default Home;
