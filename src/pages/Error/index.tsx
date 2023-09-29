import React from 'react';
import styled from 'styled-components'
import ErrorGif from '../../assets/error404.gif'

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px
`

const ErrorLogo = styled.img`
	max-width: 800px;
`

const Title = styled.h1`
	margin-top: 0px;
	font-weight: 300;
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
