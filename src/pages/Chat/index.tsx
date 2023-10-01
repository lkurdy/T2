import styled from 'styled-components'
import { useEffect } from 'react';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

function Chat() {
	useEffect(() => {
		document.title = 'Chat - ft_transcendence';
	}, []);

  return (
    <Container>
		Chat
    </Container>
  );
}

export default Chat;
