import styled from 'styled-components'
import { useEffect } from 'react';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 55px`

function Profile() {
	useEffect(() => {
		document.title = 'Profile - ft_transcendence';
	}, []);

  return (
    <Container>
		Profile
    </Container>
  );
}

export default Profile;
