import React from 'react';
import styled from 'styled-components'
import ErrorGif from '../../assets/error404.gif'

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ErrorLogo = styled.img`
	max-width: 800px;
	margin-top: -200px;
`

const Title = styled.h1`
	font-weight: 300;
	margin-top: -20px;
`

const SubTitle = styled.h2`
	font-weight: 300;
`

function Error()
{
	return (<Container>
				<ErrorLogo src={ErrorGif} alt='error404.gif' />
				<Title>
					Page not found
				</Title>
				<SubTitle>
					The page you are looking for may have been moved, deleted or possibly never existed...
				</SubTitle>
			</Container>);
}

export default Error;
